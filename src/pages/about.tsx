import React, { useState } from "react"
import { PageProps, graphql } from "gatsby"
import {
    Button,
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
import { AboutPageQuery } from "graphql-types"

import SEO from "components/seo"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Section from "components/PageLayout/Section"
import Text from "components/Typography/Text"
import ContentWithIcon from "components/General/ContentWithIcon"
import { RaisedImage } from "components/Image"
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
        data: AboutPageQuery
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
                <Section title="Night Market" maxWidth="lg">
                        <Text align="center" paragraph>
                            Night Market is TASA's biggest event of the spring semester, 
                            where we try to bring genuine night market experience from Taiwan to College
                            Park. The night will feature fun games, interesting cultural activities, and tasty food. Entrance is free!
                        </Text>
                </Section>
                
                <Section title="Mission Statement" maxWidth="lg">
                    <Text align="center">
                    TASA at UMCP is dedicated to develop and maintain
                        Taiwanese/Taiwanese American student life and
                        organizational relations at the University of Maryland -
                        College Park, as well as developing relations with
                        Taiwanese/Taiwanese American communities nationwide.
                    </Text>
                </Section>

            </PageContent>
        </>
    )
}

export const query = graphql`
    query AboutPage {
        background: file(relativePath: { eq: "tasa2022.jpg"}) {
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
