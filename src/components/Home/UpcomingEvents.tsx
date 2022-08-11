import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import Text from "components/Typography/Text"
import Event from "components/Events/NewEvent"
import ButtonLink from "components/Button/ButtonLink"

const styles = (theme: Theme) =>
    createStyles({
        container: {
            [theme.breakpoints.down("xs")]: {
                padding: "1rem 25%",
            },
            [theme.breakpoints.up("sm")]: {
                padding: "1rem 5%",
            },
            [theme.breakpoints.up("md")]: {
                padding: "2rem 5%",
            },
            margin: 0,
            textAlign: "center",
        },
        events: {
            display: "grid",
            [theme.breakpoints.down("xs")]: {
                gap: "1rem",
            },
            [theme.breakpoints.up("sm")]: {
                gap: "1.5rem",
                gridTemplateColumns: "repeat(3, 1fr)",
            },
            margin: 0,
            padding: "1rem 0",
        },
        button: {
            fontWeight: "bold",
            [theme.breakpoints.down("xs")]: {
                fontSize: "1rem",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "1.25rem",
            },
            [theme.breakpoints.up("md")]: {
                padding: "1rem 1.5rem",
                fontSize: "1.5rem",
            },
        },
    })

type Props = WithStyles<typeof styles>

function UpcomingEvents(props: Props) {
    const { classes } = props
    var data = require("../Events/AllEvents.json")
    var events = []
    for (var i = 0; i < 3; i++) {
        events.push(
            <Event
                image={data.events[i].image}
                title={data.events[i].title}
                date={data.events[i].date}
                link={data.events[i].link}
            />
        )
    }

    return (
        <div className={classes.container}>
            <Text variant="h2" color="primary">
                Upcoming Events
            </Text>
            <Text variant="body1" color="textPrimary" align="center">
                TASA organizes many fun events throughout the year! Be sure to
                follow us on Facebook for all the latest announcements!
            </Text>
            <div className={classes.events}>{events}</div>
            <ButtonLink
                className={classes.button}
                to="events"
                variant="contained"
                color="secondary"
            >
                View All Events
            </ButtonLink>
        </div>
    )
}

export default withStyles(styles)(UpcomingEvents)
