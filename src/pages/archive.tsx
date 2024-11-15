import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { ArchivePageQuery } from "graphql-types"

// Components
import SEO from "components/seo"
import Section from "components/PageLayout/Section"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"
import ArchiveSection from "components/Archive/ArchiveSection"

const styles = (theme: Theme) => createStyles({})

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: ArchivePageQuery
    }

function ArchivePage(props: Props) {
    const { data, classes } = props
    const { background } = data

    if (!background) throw new Error("Archive background does not exist.")

    return (
        <>
            <SEO title="Events" />
            <ParallaxBackground image={background}>
                <Text variant="h3" color="white" align="center">
                    Archive
                </Text>
            </ParallaxBackground>
            <PageContent>
                <ArchiveSection
                    title="2018-2019"
                    boardLink="https://umcptasa.github.io/old-html-website/pages/board1819.html"
                    eventsLink="https://umcptasa.github.io/old-html-website/pages/events1819.html"
                />
                <ArchiveSection
                    title="2019-2020"
                    boardLink="https://umcptasa.github.io/old-html-website/pages/board.html"
                    eventsLink="https://umcptasa.github.io/old-html-website/pages/events.html"
                />
                {/* <ArchiveSection
                    title="2020-2021"
                    boardLink="/"
                    eventsLink="/events"
                />
                <ArchiveSection
                    title="2021-2022"
                    boardLink="/"
                    eventsLink="/events"
                /> */}
                <ArchiveSection
                    title="2022-2023"
                    boardLink="/board22"
                    eventsLink="/events"
                />
                <ArchiveSection
                    title="2023-2024"
                    boardLink="/board23"
                    eventsLink="/events"
                />
            </PageContent>
        </>
    )
}

export const query = graphql`
    query ArchivePage {
        background: file(relativePath: { eq: "archive.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(ArchivePage)
