import { useStaticQuery, graphql } from "gatsby"
import { mapImgToNode, NodeWithImage } from "utils/hookUtils"

// Type Definitions

type EventEdge = GatsbyTypes.EventsQuery["allMarkdownRemark"]["edges"][0]
type EventNode = EventEdge["node"]

export type EventHookOptions = Readonly<{
    tags?: string[]
    amount?: number
    filterFunctions?: EventFilterFunction[]
}>

export type EventArrayType = ReturnType<typeof useEvents>
export type EventType = EventArrayType[0]
export type ImageType = EventType["image"]
export interface EventFilterFunction {
    (edge: EventEdge): boolean
}

/**
 * Returns the event and their associated images based on options provided to the hook
 *
 * @param options Takes a tags array, amount to return, and a filter function. Filter must take an event node and return bool
 */
export default function useEvents(options: EventHookOptions) {
    const { tags, amount, filterFunctions } = options
    // Because static queries can't have parameters, we have to query for everything
    const data = useStaticQuery<GatsbyTypes.EventsQuery>(graphql`
        query Events {
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "event" } } }
                sort: { order: DESC, fields: frontmatter___date }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter { 
                            title
                            tags
                            date
                            category
                            imgsrc
                            pinned
                            link
                        }
                        html
                        id
                    }
                }
            }
            allFile(
                sort: { fields: relativePath, order: ASC }
                filter: { absolutePath: { regex: "static/assets/" } }
            ) {
                edges {
                    node {
                        id
                        relativePath
                        ...RaisedImage
                    }
                }
            }
        }
    `)

    if (!data.allMarkdownRemark?.edges || !data.allFile?.edges) {
        throw new Error("Error in formation of events query")
    }

    let events = data.allMarkdownRemark.edges

    if (tags && tags.length > 0) {
        const containsTag = (eventTag: GatsbyTypes.Maybe<string>) => {
            return eventTag ? tags?.includes(eventTag) : false
        }

        // Tags were passed in, so filter based on them
        events = data.allMarkdownRemark.edges.filter(
            (eventNode) =>
                eventNode.node.frontmatter?.tags &&
                eventNode.node.frontmatter.tags.some(containsTag)
        )
    }
    

    if (filterFunctions) {
        filterFunctions.forEach((filterFunction) => events = events.filter(filterFunction))
    }

    const eventsWithPhoto = mapImgToNode<EventNode>(events, data.allFile.edges)

    return amount && amount < eventsWithPhoto.length
        ? eventsWithPhoto.slice(0, amount)
        : eventsWithPhoto
}
