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
                        benefits include 5-15% off Aroy Thai, Box'd Kitchen, Class520, Cuppa
                        Tea, and Onikama Ramen Bar (more to come!!). In addition, this card will 
                        grant you free entry to Tour of Taiwan and free event tickets to Night 
                        Market! On top of that, this card will supply you free raffle tickets to 
                        both Tour of Taiwan and Night Market! Receive all of these perks for the 
                        small cost of $15!
                    </Text>
                </Section>

                <Section title="Current Benefits Include">
                    <ul>
                        <li>
                            <Text>10% off at <a href="https://www.aroythaicollegepark.com/" target="_blank">
                                Aroy Thai
                            </a> - 10% off on any purchase above $10
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
                            <Text>15% off at <a href="https://www.onikamaramenbar.com/" target="_blank">
                                Onikama Ramen Bar
                            </a> - 15% off on any purchase above $20
                            </Text>
                        </li>
                        <li>
                            <Text>Free Entry to Tour of Taiwan and Free Event Tickets to Night Market</Text>
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
                    <Text>$15 per card</Text>
                </Section>

                <Section title="Order Your Membership Card Today!">
                    <Text>
                        Complete the form below if you are interested in
                        partaking in this wonderful journey with us!
                    </Text>
                    <Button
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeyCWp6tTGT_XKyxVNalwirqWu3OSi0Di1-Ul2_b3eFbwH2yQ/viewform"
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
