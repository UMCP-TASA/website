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
        data: BoardPageQuery
    }

function BoardPage(props: Props) {
    const { data, classes } = props
    const { background } = data
    if (!background) throw new Error("Board background does not exist.")

    const bios = useBios()
    const presidents = bios.slice(0, 2)
    const rest = bios.slice(2)

    return (
        <>
            <SEO title="Board" />
            <ParallaxBackground image={background}>
                <Text variant="h3" color="white" align="center" paragraph>
                    Tickets
                </Text>
            </ParallaxBackground>
            <PageContent>
            <Section title="Ticket System" maxWidth="lg">
                        <Text align="center" paragraph>
                            $3 for 3; $5 for 6; $10 for 13
                        </Text>
                </Section>
                <Section title="Ring Toss" maxWidth="lg">
                        <Text align="center" paragraph>
                            Ring toss costs 2 tickets to play and every bottle you get, you earn one ticket back.
                        </Text>
                </Section>
                <Section title="Plinko" maxWidth="lg">
                        <Text align="center" paragraph>
                            Plinko costs 1 ticket to play. You roll a golf ball along a path and depending on what cup you get the ball in you will 
                        </Text>
                </Section>
                <Section title="Shuttlecock" maxWidth="lg">
                        <Text align="center" paragraph>
                            
                        </Text>
                </Section>
            </PageContent>


        </>
    )
}

export const query = graphql`
    query BoardPage {
        background: file(relativePath: { eq: "events.jpg" }) {
            ...BackgroundImage
        }
    }
`
export default withStyles(styles)(BoardPage)
