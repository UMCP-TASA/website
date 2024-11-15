import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Hidden,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { BoardPageQuery } from "graphql-types"

import SEO from "components/seo"
import useBios23 from "hooks/archivedBoardHooks/useBios23"
import BioGrid from "components/Bios/BioGrid"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Section from "components/PageLayout/Section"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        grid: {},
        gridItem: {},
    })

type Props = WithStyles<typeof styles> &
    PageProps & {
        data: BoardPageQuery
    }

function BoardPage(props: Props) {
    const { data, classes } = props
    const { boardBackground } = data
    if (!boardBackground) throw new Error("Board background does not exist.")

    const bios = useBios23()
    const presidents = bios.slice(0, 2)
    const rest = bios.slice(2)

    return (
        <>
            <SEO title="Board" />
            <ParallaxBackground image={boardBackground}>
                <Text variant="h3" color="white" align="center" paragraph>
                    Meet the 2023-2024 Board
                </Text>
                <Text variant="h6" color="white" align="center">
                    Check out the people who made it all happen in 2023-2024!
                </Text>
            </ParallaxBackground>
            <PageContent>
                <Section maxWidth="lg">
                    <Hidden xsDown>
                        <Text
                            variant="subtitle1"
                            color="textSecondary"
                            align="center"
                            paragraph
                        >
                            Tip: Learn more about the board by hovering or
                            tapping over their picture!
                        </Text>
                    </Hidden>

                    <BioGrid bios={presidents} />
                    <BioGrid bios={rest} />
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query BoardPage23 {
        boardBackground: file(relativePath: { eq: "board2023.JPG" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(BoardPage)
