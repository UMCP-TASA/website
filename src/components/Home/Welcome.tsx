import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        container: {
            [theme.breakpoints.down("sm")]: {
                padding: "1rem 10%",
            },
            [theme.breakpoints.up("md")]: {
                padding: "2rem 20%",
            },
            margin: 0,
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
        },
        title: {
            fontWeight: "bold",
        },
    })

type Props = WithStyles<typeof styles>

function Welcome(props: Props) {
    const { classes } = props
    return (
        <div className={classes.container}>
            <Text className={classes.title} variant="h2" color="primary">
                Welcome to UMCP TASA!
            </Text>
            <Text variant="body1" color="textPrimary">
                <br></br>
                The <b>Taiwanese American Student Association (TASA)</b> at the
                University of Maryland, College Park is a social and cultural
                student organization dedicated to celebrating Taiwanese culture
                on campus. TASA at UMCP is dedicated to developing and
                maintaining Taiwanese American student life and organizational
                relations on campus, as well as developing relations with
                Taiwanese and Taiwanese American communities nationwide. Our
                community is composed of and open to people from all backgrounds
                interested in learning about and celebrating Taiwanese culture.
                We hold general meetings on <b>Mondays from 7pm - 9pm</b> and
                host many events throughout the school year. Check out more
                here!
            </Text>
        </div>
    )
}

export default withStyles(styles)(Welcome)
