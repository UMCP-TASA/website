import React from "react"
import { PageProps, graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import { NotFoundPageQuery } from "graphql-types"

// Components
import SEO from "components/seo"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        // Add styles here
    })

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: NotFoundPageQuery
    }

function NotFoundPage(props: Props) {
    const { data } = props
    const { pageBackground } = data

    if (!pageBackground) throw new Error("404 background does not exist.")

    return (
        <>
            <SEO title="404 Not found" />
            <ParallaxBackground image={pageBackground} imageHeight="100vh">
                <Text variant="h3" color="white">
                    The page you're looking for doesn't exist!
                </Text>
            </ParallaxBackground>
        </>
    )
}

export const query = graphql`
    query NotFoundPage {
        pageBackground: file(relativePath: { eq: "surpisedpikachu.png" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(NotFoundPage)
