import React from "react"
import { PageProps, graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import moment from "moment"
import { EventPageQuery } from "graphql-types"

// Components
import SEO from "components/seo"
import Section from "components/PageLayout/Section"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"
import ButtonLink from "components/Button/ButtonLink"
import EventsGrid from "components/Events/EventsGrid"

// Hooks
import useEvents from "hooks/useEvents"
import {
    getFutureEventsFunc,
    getPastEventsFunc,
    onlyPinnedEvents,
    removePinnedEvents,
} from "utils/eventUtils"

const styles = (theme: Theme) =>
    createStyles({
        margin: { margin: theme.spacing(2) },
    })

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: EventPageQuery
    }

function EventPage(props: Props) {
    const { data, classes } = props
    const { background } = data

    if (!background) throw new Error("Events background does not exist.")

    const currentTime = moment()
    const events = useEvents({})
    const importantEvents = events.filter(onlyPinnedEvents)
    const futureEvents = events.filter(getFutureEventsFunc(currentTime))
    const pastEvents = events
        .filter(getPastEventsFunc(currentTime))
        .filter(removePinnedEvents)

    return (
        <>
            <SEO title="Events" />
            <ParallaxBackground image={background}>
                <Text variant="h3" color="white" align="center">
                    Events
                </Text>
            </ParallaxBackground>
            <PageContent>
                <Section title="Notable Events" maxWidth="lg">
                    <EventsGrid events={importantEvents} sm={6} />
                </Section>

                <Section title="Upcoming Events" maxWidth="lg">
                    <EventsGrid events={futureEvents} />
                </Section>

                <Section title="Past Events" maxWidth="lg">
                    <EventsGrid events={pastEvents} />
                </Section>

                <Section>
                    <Text
                        variant="h5"
                        color="textSecondary"
                        align="center"
                        paragraph
                    >
                        Want to check out events further back? Check out our
                        archives!
                    </Text>
                    <ButtonLink
                        to="/archive"
                        className={classes.margin}
                        variant="contained"
                        color="primary"
                    >
                        Archives
                    </ButtonLink>
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query EventPage {
        background: file(relativePath: { eq: "events.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(EventPage)
