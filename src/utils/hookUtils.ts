import { EventsQuery, BioQuery, RaisedImageFragment } from "graphql-types"

type Edges =
    | EventsQuery["allMarkdownRemark"]["edges"]
    | BioQuery["allMarkdownRemark"]["edges"]
type Images =
    | EventsQuery["allFile"]["edges"]
    | BioQuery["allFile"]["edges"]

export interface NodeWithImage<T> {
    node: T
    image: RaisedImageFragment
}

/**
 * Takes in markdown remark nodes and images and links them together.
 * Also takes in the parameter type of the markdown remark node
 *
 * This matches up each image with its proper event
 * This is inefficient because it goes through every image to find the right one for this event
 * A better search would use the fact that allFile returns sorted results and use binary search to find the matching image
 * Note this is harder because absolutePath
 * @param markdownRemarkEdges
 * @param allImagesArray
 */
export function mapImgToNode<T>(
    markdownRemarkEdges: Edges,
    allImagesArray: Images
): ReadonlyArray<NodeWithImage<T>> {
    // Can make this faster by using binary search
    const findImage = (imgSrc: string) =>
        allImagesArray.find((file) => file.node.relativePath == imgSrc)

    const mapEdge = (edge: Edges[0]) => {
        if (!edge.node.frontmatter?.imgsrc) {
            throw new Error("Node does not have an image associated with it.")
        }

        const image = findImage(edge.node.frontmatter.imgsrc)
        if (!image) {
            throw new Error("Tried to find an associated image, but failed")
        }

        return {
            node: edge.node,
            image: image.node,
        }
    }

    // @ts-ignore Not sure why it's not properly recognizing markdownRemarkEdges as an array
    return markdownRemarkEdges.map(mapEdge)
}
