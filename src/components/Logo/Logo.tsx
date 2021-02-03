import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { withStyles, WithStyles, createStyles } from "@material-ui/core"
import { LogoQuery } from "graphql-types"

const styles = createStyles({
    root: {
        verticalAlign: "middle",
    },
})

type Props = WithStyles<typeof styles> & {
    white?: boolean,
}

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

function Logo(props: Props) {
    const { classes, white = false } = props
    const data = useStaticQuery<LogoQuery>(graphql`
        query Logo {
            black: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            white: file(relativePath: { eq: "logo_white.png" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `)

    const image = white ? data.white?.childImageSharp?.fixed : data.black?.childImageSharp?.fixed

    if (!image) throw new Error("Image doesn't exist.")

    return (
        <>
            <Img
                className={classes.root}
                alt="Logo"
                fixed={image}
            />
        </>
    )
}

export default withStyles(styles)(Logo)
