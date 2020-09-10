import React, { useState } from "react"
import { PageProps, graphql } from "gatsby"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import {
    Language,
    GroupAdd,
    Forum,
    Chat,
    VerifiedUser,
    Edit,
} from "@material-ui/icons"
import VisibilitySensor from "react-visibility-sensor"
import { useTrail, animated } from "react-spring"

import SEO from "components/seo"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Section from "components/PageLayout/Section"
import Text from "components/Typography/Text"
import ContentWithIcon from "components/General/ContentWithIcon"
import RaisedImage from "components/General/RaisedImage"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

const styles = (theme: Theme) =>
    createStyles({
        missionStatement: {
            marginTop: theme.spacing(3),
        },
    })

const AnimatedGrid = animated(Grid)

type Goal = {
    icon: React.ReactNode
    title: string
    description: string
}

type Props = WithStyles<typeof styles> &
    PageProps & {
        data: GatsbyTypes.AboutPageQuery
    }

function AboutPage(props: Props) {
    const { data, classes } = props
    const { background, pic1, pic2, pic3, pic4, pic5 } = data
    if (!background) throw new Error("About background does not exist.")

    const goals: Goal[] = [
        {
            icon: <Language fontSize="large" />,
            title: "Awareness",
            description:
                "Promoting awareness of Taiwanese/Taiwanese American culture, language, history, and current affairs",
        },
        {
            icon: <GroupAdd fontSize="large" />,
            title: "Liaison",
            description:
                "Serving as the liaison for the Taiwanese/Taiwanese American individuals at the University of Maryland, College Park",
        },
        {
            icon: <Forum fontSize="large" />,
            title: "Forum",
            description:
                "Providing the forum needed for the exchange of information, ideas, and feelings among individuals of the Taiwanese/Taiwanese American community",
        },
        {
            icon: <Chat fontSize="large" />,
            title: "Inform",
            description:
                "Inform students/members at the university on the various political views in the Taiwanese community",
        },
        {
            icon: <VerifiedUser fontSize="large" />,
            title: "Support",
            description:
                "Supporting social and educational events and developing programs that will benefit the Taiwanese/Taiwanese American community as a whole",
        },
        {
            icon: <Edit fontSize="large" />,
            title: "Strong Relationships",
            description:
                "Developing a strong relationship with other organizations at the University of Maryland, with the University Administration, and with other organizations nationwide, in order to communicate and fulfill our needs and goals",
        },
    ]

    const [isMissionVisible, setMissionVisible] = useState(false)
    const missionTrails = useTrail(goals.length, {
        to: {
            opacity: isMissionVisible ? 1 : 0,
            transform: isMissionVisible
                ? "translateY(0px)"
                : "translateY(-10px)",
        },
        immediate: usePrefersReducedMotion(),
    })

    return (
        <>
            <SEO title="About Us" />
            <ParallaxBackground image={background} imageHeight={"65vh"}>
                <Text variant="h3" color="white" align="center">
                    About Us
                </Text>
            </ParallaxBackground>
            <PageContent>
                <Section>
                    <Text align="center">
                        TASA at UMCP is dedicated to develop and maintain
                        Taiwanese/Taiwanese American student life and
                        organizational relations at the University of Maryland -
                        College Park, as well as developing relations with
                        Taiwanese/Taiwanese American communities nationwide.
                    </Text>
                </Section>

                <Section title="Mission Statement" maxWidth="lg">
                    <Text align="center">
                        At TASA, we aim to provide these functions:
                    </Text>

                    <VisibilitySensor
                        onChange={(isVisible) => setMissionVisible(isVisible)}
                        active={!isMissionVisible}
                        partialVisibility
                    >
                        <Grid
                            container
                            spacing={6}
                            justify="center"
                            className={classes.missionStatement}
                        >
                            {missionTrails.map((props, index) => (
                                <AnimatedGrid item xs={12} md={4} key={goals[index].title} style={props}>
                                    <ContentWithIcon
                                        icon={goals[index].icon}
                                        title={`${index + 1}. ${goals[index].title}`}
                                        description={goals[index].description}
                                    />
                                </AnimatedGrid>
                            ))}
                            {/* {goals.map((goal, index) => (
                                <Grid item xs={12} md={4} key={goal.title}>
                                    <ContentWithIcon
                                        icon={goal.icon}
                                        title={`${index + 1}. ${goal.title}`}
                                        description={goal.description}
                                    />
                                </Grid>
                            ))} */}
                        </Grid>
                    </VisibilitySensor>
                </Section>

                <Section title="Big/Little System" maxWidth="lg">
                    <Container maxWidth="md">
                        <Text align="center" paragraph>
                            We are an organization committed to making everyone
                            feel welcome so we have very our own big/little
                            system. Every new member of TASA will recieve a
                            veteran TASA member as a big who will serve as a
                            mentor throughout their college career and help them
                            become acquainted with TASA. The big/little system
                            is an integral part of TASA that helps us form the
                            TASA family that we pride ourselves in. At the
                            beginning of every school year, we host a few
                            big/little GBMs so that new members can meet current
                            members and choose their big.
                        </Text>
                    </Container>

                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <RaisedImage image={pic1} alt="Angela big little" />
                        </Grid>
                        <Grid item xs={false} sm={4}>
                            <RaisedImage image={pic2} alt="Nathan big little" />
                        </Grid>
                        <Grid item xs={false} sm={4}>
                            <RaisedImage
                                image={pic3}
                                alt="Rebecca big little"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RaisedImage
                                image={pic4}
                                alt="Stephan big little"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RaisedImage
                                image={pic5}
                                alt="Justin family tree"
                            />
                        </Grid>
                    </Grid>
                </Section>

                <Section title="Junior Officer System">
                    <Text
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        Want to work with the ones who make it all happen? Want
                        to join the planning of events and meetings?
                    </Text>
                    <Text align="center" paragraph>
                        Members of TASA can apply to become junior officers of
                        TASA. To qualify and maintain membership, members are
                        expected to reguarly attend weekly GBMs, help lead
                        planning for events, attend a few board meetings, and be
                        role models for the rest of the organization.
                    </Text>
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query AboutPage {
        background: file(relativePath: { eq: "tasa2019.jpg" }) {
            ...BackgroundImage
        }
        pic1: file(relativePath: { eq: "angela_biglittle.jpg" }) {
            ...RaisedImage
        }
        pic2: file(relativePath: { eq: "nathan_biglittle.jpg" }) {
            ...RaisedImage
        }
        pic3: file(relativePath: { eq: "rebecca_biglittle.jpg" }) {
            ...RaisedImage
        }
        pic4: file(relativePath: { eq: "stephan_biglittle.jpg" }) {
            ...RaisedImage
        }
        pic5: file(relativePath: { eq: "justin_familytree.jpg" }) {
            ...RaisedImage
        }
    }
`

export default withStyles(styles)(AboutPage)
