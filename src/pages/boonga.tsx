import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Hidden,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { BoongaPageQuery } from "graphql-types"

import SEO from "components/seo"
import useBios from "hooks/useBios"
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
        data: BoongaPageQuery
    }

function BoongaPage(props: Props) {
    const { data, classes } = props
    const { boardBackground } = data
    if (!boardBackground) throw new Error("Board background does not exist.")

    const bios = useBios()
    const presidents = bios.slice(0, 2)
    const rest = bios.slice(2)

    return (
        <>
            <SEO title="BOONGA" />
            <ParallaxBackground image={boardBackground}>
                <Text variant="h3" color="white" align="center" paragraph>
                    BOOONGA BOOOOON BOONGAWANGA
                </Text>
                <Text variant="h6" color="white" align="center">
                    lord savior BOONGA
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
                            Tip: WORSHIP BOONGA
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
    query BoongaPage {
        boardBackground: file(relativePath: { eq: "board.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(BoongaPage)
