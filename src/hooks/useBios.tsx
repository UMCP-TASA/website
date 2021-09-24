import { useStaticQuery, graphql } from "gatsby"
import { mapImgToNode } from "utils/hookUtils"
import { BioQuery } from "graphql-types"

// Type Definitions
type BioEdge = BioQuery["allMarkdownRemark"]["edges"][0]
type BioNode = BioEdge["node"]

export type BioArrayType = ReturnType<typeof useBios>
export type BioType = BioArrayType[0]
export type BioImageType = BioType["image"]

/**
 * Returns all bios with their associated images
 */
export default function useBios() {
    // Because static queries can't have parameters, we have to query for everything
    const data = useStaticQuery<BioQuery>(graphql`
        query Bio {
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "bio" } } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            majors
                            name
                            position
                            imgsrc
                            category
                        }
                        html
                        excerpt(format: HTML, truncate: true, pruneLength: 200)
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
            order: markdownRemark(fileAbsolutePath: { regex: "/bio-order/" }) {
                frontmatter {
                    options
                }
            }
        }
    `)

    if (
        !data.allMarkdownRemark?.edges ||
        !data.allFile?.edges ||
        !data.order?.frontmatter?.options
    ) {
        throw new Error("Error in formation of Bio query")
    }

    const sortingOrder = data.order.frontmatter.options
    const sortingFunction = (a: BioEdge, b: BioEdge) =>
        sortingOrder.indexOf(a.node.frontmatter?.position) -
        sortingOrder.indexOf(b.node.frontmatter?.position)

    // @ts-ignore Sort does an in-place sort and data.allMarkdownRemark.edges is a readonly array.
    // Since we're not using data.allMarkdownRemark.edges again, it's okay if we use in-place
    const bios = data.allMarkdownRemark.edges.sort(sortingFunction)

    return mapImgToNode<BioNode>(bios, data.allFile.edges)
}
