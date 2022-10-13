import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Button,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { MembershipPageQuery } from "graphql-types"

import SEO from "components/seo"
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
                <Text align="center">
                    Valid through the 2022-2023 school year
                </Text>
            </ParallaxBackground>

            <PageContent>
                <Section title="What is a TASA Membership Card?">
                    <Text align="center">
                        A TASA membership card brings fun, happiness,
                        and premium benefits right to your door. These
                        benefits include 10% off Aroy Thai, Box'd Kitchen, Class520, and Cuppa
                        Tea (more to come!!). In addition, this card will award
                        you free event tickets AND raffle tickets at two of our
                        major events: Tour of Taiwan and Night Market! Receive all
                        of these perks for the small cost of $15, or get some
                        friends together and buy a group bundle!
                    </Text>
                </Section>

                <Section title="Current Benefits Include">
                    <ul>
                        <li>
                            <Text>10% off at <a href="https://www.aroythaicollegepark.com/" target="_blank">
                                Aroy Thai
                            </a> - 10% off on any purchase $10 or more
                            </Text>
                        </li>
                        <li>
                            <Text>10% off at <a href="https://boxdkitchen.com/" target="_blank">
                                Box'd Kitchen
                            </a>
                            </Text>
                        </li>
                        <li>
                            <Text>10% off at <a href="https://www.class520cp.com/" target="_blank">
                                Class520
                            </a> - 10% off for cash, 5% off for card, register ONLY
                            </Text>
                        </li>
                        <li>
                            <Text>10% off at <a href="https://www.cuppatea.us/" target="_blank">
                                Cuppa Tea
                            </a>
                            </Text>
                        </li>
                        <li>
                            <Text>Free Event Tickets to Tour of Taiwan and Night Market</Text>
                        </li>
                        <li>
                            <Text>
                                Free Raffle Tickets at Tour of Taiwan and Night
                                Market
                            </Text>
                        </li>
                    </ul>
                    <Button
                        href="https://www.google.com/maps/d/u/0/edit?mid=1teAh6Njo7LKsmSuR9JUX8ZCwXEmU3Eg&usp=sharing"
                        target="_blank"
                        rel="noreferrer noopener"
                        variant="contained"
                        color="secondary"
                    >
                        Map of Restaurants
                    </Button>
                </Section>

                <Section title="Pricing">
                    <Text>$15 for 1 card</Text>
                    <Text>$27 for 2 cards</Text>
                    <Text>$48 for 4 cards</Text>
                    <Text>$100 for 10 cards</Text>
                </Section>

                <Section title="Order Your Membership Card Today!">
                    <Text>
                        Complete the form below if you are interested in
                        partaking in this wonderful journey with us!
                    </Text>
                    <Button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfgdUDFC9smFFwF-4DvmULrPQSuNbf2nHQLZiskcDazZaW0WQ/viewform"
                        target="_blank"
                        rel="noreferrer noopener"
                        variant="contained"
                        color="secondary"
                    >
                        Order Now
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
