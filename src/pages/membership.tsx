import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Button,
    Theme,
    Grid,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { MembershipPageQuery } from "graphql-types"
import { FlippableCard, RaisedImage } from "components/Image"

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

const theme = createTheme({
    palette: {
    primary: {
        main: '#C5C9B7', // Set your desired primary color here
        contrastText: "#ffffff",
    },
    secondary: {
        main: '#BCC5AE', // Optional: Set a secondary color
        contrastText: "#ffffff",
    },
    neutral: {
        main: '#C5C9B7'
    },
    info: {
        // We'll use this for the color of text
        main: "#999",
        dark: "#555",
    },
    text: {
        primary: "#999",
        secondary: "#555",
    },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: [
            "Readex Pro",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(","),
    },
});


type Props = WithStyles<typeof styles> &
    PageProps & {
        data: MembershipPageQuery
    }

function MembershipPage(props: Props) {
    const { data, classes } = props
    const { cardBackground, cardFront, cardBack, quJapan, honeyPig, jumbo, onikama, tasa } = data
    if (!cardBackground) throw new Error("Card background does not exist.")  

    const cardFrontImageUrl = cardFront!!.childImageSharp!!.gatsbyImageData.images.fallback.src
    const cardBackImageUrl = cardBack!!.childImageSharp!!.gatsbyImageData.images.fallback.src



    return (
        <>
            <SEO title="Membership Cards" />
            <ParallaxBackground image={cardBackground}>
                <Text variant="h3" color="white" align="center">
                    TASA Membership Cards
                </Text>
            </ParallaxBackground>

            <PageContent>
                <Section title="What is a TASA Membership Card?">
                    <Text align="center">
                        A TASA membership card brings fun, happiness,
                        and premium benefits right to your door. These
                        benefits include 5-15% off <strong>Jumbo Jumbo</strong>, <strong>Honey Pig</strong>, 
                        <strong> Onikama Ramen</strong>, and <strong>Qu Japan</strong> (more to come!!). 
                        In addition, this card will grant you <strong>free tickets</strong> at <strong>TASA Night Market! </strong>
                        These cards are available to all so get one (or many!) before they're gone! <br /><strong>Preorder Deadline: Sunday, Feburary 23<sup>rd</sup></strong>
                    </Text>
                    <br /> <br />
                    <ThemeProvider theme={theme}>
                        <Button
                            href="https://docs.google.com/forms/d/e/1FAIpQLSe4VniVhLu51vkdibYDPeae0IevVIiBJkXR_Gm7Hpi8GNSjFg/viewform"
                            target="_blank"
                            rel="noreferrer noopener"
                            variant="contained"
                            color="secondary"
                        >
                            Order Now
                        </Button>
                    </ThemeProvider>

                    <br />
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Section title="Check It Out">
                                <FlippableCard frontImgSrc={cardFrontImageUrl} backImgSrc={cardBackImageUrl} />
                            </Section>
                        </Grid>
                        <Grid item xs={2} sm={2}></Grid>
                        <Grid item xs={12} sm={6}>
                            <Section title="FAQs">
                                <Text variant="subtitle1" color="textSecondary" align="center">
                                    How much does a card cost?
                                    </Text>
                                <Text variant="body1" color="textPrimary" align="center">
                                    The membership card <strong>only</strong> costs <u>$10</u>!
                                    </Text>
                                <Text variant="subtitle1" color="textSecondary" align="center">
                                    How do I use my membership card?
                                    </Text>
                                <Text variant="body1" color="textPrimary" align="center">
                                    Present your card during the checkout process
                                    </Text>
                                <Text variant="subtitle1" color="textSecondary" align="center">
                                    How long is the membership card valid for?
                                    </Text>
                                <Text variant="body1" color="textPrimary" align="center">
                                    The card is valid through the <strong>2025 calendar year</strong>.
                                    </Text>
                                <Text variant="subtitle1" color="textSecondary" align="center">
                                    Who should I contact for any questions?
                                    </Text>
                                <Text variant="body1" color="textPrimary" align="center">
                                    Please contact <strong>umcptasa@gmail.com</strong> or DM us on instagram at <strong>@umcptasa</strong>
                                    </Text>
                            </Section>
                        </Grid>
                    </Grid>
                    

                </Section>
                <Section title="Current Benefits Include">
                    <br></br>
                    <Grid container spacing={6} justifyContent="center">
                        <Grid item xs={12} sm={4} justifyContent="center">
                            <a href="https://www.qujapancollegepark.com/" target="_blank">
                                <RaisedImage imageNode={quJapan!} alt="Qu Japan"/>
                            </a>
                            <br /> <br />
                            <Text align="center" variant="h6" color="textPrimary">
                                10% off purchase over $20
                            </Text>
                        </Grid>

                        <Grid item xs={12} sm={4} justifyContent="center">
                            <a href="https://www.honeypigbbq.com/college-park-md" target="_blank">
                                <RaisedImage imageNode={honeyPig!} alt="Honey Pig BBQ"/>
                            </a>
                            <br /> <br />
                            <Text align="center" variant="h6" color="textPrimary">
                                5% off any purchase
                            </Text>
                        </Grid>

                        <Grid item xs={12} sm={4} justifyContent="center">
                            <a href="https://www.jumbojumbocafe.com/" target="_blank">
                                <RaisedImage imageNode={jumbo!} alt="Jumbo Jumbo"/>
                            </a>
                            <br /> <br />
                            <Text align="center" variant="h6" color="textPrimary">
                                5% off purchase over $20
                            </Text>
                        </Grid>

                        <Grid item xs={12} sm={4} justifyContent="center">
                            <a href="https://www.onikamaramenbar.com/" target="_blank">
                                <RaisedImage imageNode={onikama!} alt="Onikama Ramen Bar"/>
                            </a>
                            <br /> <br />
                            <Text align="center" variant="h6" color="textPrimary">
                                15% off purchase over $15
                            </Text>
                        </Grid>

                        <Grid item xs={12} sm={4} justifyContent="center">
                            <RaisedImage imageNode={tasa!} alt="TASA Benefits"/>
                            <br /> <br />
                            <Text align="center" variant="h6" color="textPrimary">
                                Free Tickets at Night Market
                            </Text>
                        </Grid>
                    </Grid>

                    <br /> <br />
                    <ThemeProvider theme={theme}>
                        <Button
                            href="https://www.google.com/maps/d/u/0/edit?mid=1teAh6Njo7LKsmSuR9JUX8ZCwXEmU3Eg&usp=sharing"
                            target="_blank"
                            rel="noreferrer noopener"
                            variant="contained"
                            color="secondary"
                        >
                            Map of Restaurants
                        </Button>
                    </ThemeProvider>
                </Section>

                {/* <Section title="Order Your Membership Card Today!">
                    <Text>
                        Complete the form below if you are interested in
                        partaking in this wonderful journey with us!
                    </Text>
                    <br></br>
                    <ThemeProvider theme={theme}>
                        <Button
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeyCWp6tTGT_XKyxVNalwirqWu3OSi0Di1-Ul2_b3eFbwH2yQ/viewform"
                            target="_blank"
                            rel="noreferrer noopener"
                            variant="contained"
                            color="secondary"
                        >
                            Order Now
                        </Button>
                    </ThemeProvider>
                </Section> */}
            </PageContent>
        </>
    )
}

export const query = graphql`
    query MembershipPage {
        cardBackground: file(relativePath: { eq: "memberCard24.png" }) {
            ...BackgroundImage
        }
        cardFront: file(relativePath: { eq: "tasacardfront24.png" }) {
            ...RaisedImage
        }
        cardBack: file(relativePath: { eq: "tasacardback24.png" }) {
            ...RaisedImage
        }
        quJapan: file(relativePath: { eq: "quJapan.png"}) {
            ...RaisedImage
        }
        honeyPig: file(relativePath: { eq: "honeypig.png"}) {
            ...RaisedImage
        }
        jumbo: file(relativePath: { eq: "jumbo.png"}) {
            ...RaisedImage
        }
        onikama: file(relativePath: { eq: "onikama.png"}) {
            ...RaisedImage
        }
        tasa: file(relativePath: { eq: "logo_resized.png"}) {
            ...RaisedImage
        }
    }
`

export default withStyles(styles)(MembershipPage)
