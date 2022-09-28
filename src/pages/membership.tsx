import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Button,
    Hidden,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { MembershipPageQuery } from "graphql-types"

import SEO from "components/seo"
import useBios from "hooks/useBios"
import BioGrid from "components/Bios/BioGrid"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Section from "components/PageLayout/Section"
import Text from "components/Typography/Text"
import ArchiveSection from "components/Archive/ArchiveSection"

const styles = (theme: Theme) =>
    createStyles({
        grid: {},
        gridItem: {},
    })

type Props = WithStyles<typeof styles> &
    PageProps & {
        data: MembershipPageQuery
    }

function MembershipPage(props: Props) {
    const { data, classes } = props
    const { boardBackground } = data
    if (!boardBackground) throw new Error("Board background does not exist.")

    return (
        <>
            <SEO title="Membership Cards" />
            <ParallaxBackground image={boardBackground}>
                <Text variant="h3" color="white" align="center">
                    TASA Membership Cards
                </Text>
                <Text align="center">Valid through the 2022-2023 school year</Text>
            </ParallaxBackground>

            <PageContent>
                <Section title="What is a TASA Membership Card?">
                    <Text align="center">
                        A TASA membership card brings fun, happiness, 
                        and premium benefits right to your door. These 
                        benefits include 10% off Cuppa Tea, Class520, and Aroy 
                        Thai (more to come!!). In addition, this card will award 
                        you free event tickets AND raffle tickets at two of our 
                        major events: Tour of Taiwan and Night Market! Receive all 
                        of these perks for the small cost of $15, or get some 
                        friends together and buy a group bundle!
                    </Text>
                </Section>
                
                <Section title="Current Benefits Include">
                    <ul>
                        <li>
                            <Text>10% off at <a href="https://www.cuppatea.us/">
                                Cuppa Tea
                            </a>
                            </Text>
                            
                        </li>
                        <li>
                            <Text>10% off at <a href="https://www.aroythaicollegepark.com/">
                                Aroy Thai
                            </a>
                            </Text>
                        </li>
                        <li>
                            <Text>10% off at <a href="https://www.class520cp.com/">
                                Class520
                            </a>
                            </Text>
                        </li>
                        <li>
                            <Text>Free Event Tickets to Tour of Taiwan and Night Market</Text>
                        </li>
                        <li>
                            <Text>Free Raffle Tickets at Tour of Taiwan and Night Market</Text>
                        </li>
                    </ul>
                </Section>

                <Section title="Pricing">
                    <Text>$15 for 1 card</Text>
                    <Text>$27 for 2 cards</Text>
                    <Text>$48 for 4 cards</Text>
                    <Text>$100 for 10 cards</Text>
                </Section>

                <Section title="Form">
                    <Text>
                        Here is the form if you are interested in partaking in 
                        this wonderful journey with us!
                        </Text>
                    <Button 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfgdUDFC9smFFwF-4DvmULrPQSuNbf2nHQLZiskcDazZaW0WQ/viewform"
                        target="_blank"
                        rel="noreferrer noopener"
                        variant="contained"
                        color="secondary"
                        >
                            Form
                    </Button>
                </Section>

                
            </PageContent>

        </>
    )
}

export const query = graphql`
    query MembershipPage {
        boardBackground: file(relativePath: { eq: "memberCard.png" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(MembershipPage)
