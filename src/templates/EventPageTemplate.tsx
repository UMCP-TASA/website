import React from "react"
import { graphql, PageProps } from "gatsby"
import {
    Container,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { IndividualEventPageQuery } from "graphql-types"

import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import PageContent from "components/PageLayout/PageContent"
import MarkdownContent from "components/General/MarkdownContent"
import Section from "components/PageLayout/Section"

const styles = (theme: Theme) => createStyles({})

// Note this has to be synchronized with gatsby-node in createPage
type PageContext = {
    slug: string
    cover: string
    nextTitle: string
    nextSlug: string
    prevTitle: string
    prevSlug: string
}

type Props = {
    data: IndividualEventPageQuery
    pageContext: PageContext
} & PageProps &
    WithStyles<typeof styles>

function EventPageTemplate(props: Props) {
    const { data, pageContext, location, classes } = props

    // pageContext dictates the relationship between this page and others
    // For example, a component could display the next event's title and a link to it with the given parameters

    // location could be used to show the current pathname

    if (!data.markdownRemark?.frontmatter?.title)
        throw new Error("Title not provided")
    if (!data.file) throw new Error("Image doesn't exist")
    if (!data.markdownRemark.html) throw new Error("No description")

    return (
        <>
            <ParallaxBackground image={data.file} imageHeight="60vh" />
            <PageContent>
                <Section title={data.markdownRemark.frontmatter.title}>
                    <MarkdownContent content={data.markdownRemark.html} />
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query IndividualEventPage($slug: String, $imgsrc: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            id
            frontmatter {
                title
                tags
                date
                link
            }
        }
        file(relativePath: { eq: $imgsrc }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(EventPageTemplate)
