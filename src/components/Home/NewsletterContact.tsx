import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import Newsletter from "components/Mailchimp/Newsletter"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        container: {
            [theme.breakpoints.only("xs")]: {
                padding: "1rem",
            },
            [theme.breakpoints.only("sm")]: {
                padding: "1rem 15%",
            },
            [theme.breakpoints.up("md")]: {
                padding: "2rem 30%",
            },
            margin: 0,
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
        },
    })

type Props = WithStyles<typeof styles>

function NewsletterContact(props: Props) {
    const { classes } = props
    return (
        <div className={classes.container}>
            <Text variant="h2" color="primary">
                Did we miss anything?
            </Text>
            <Text variant="h6" color="textPrimary">
                Reach out to us at{" "}
                <a href="mailto:umcptasa@gmail.com">umcptasa@gmail.com</a>
            </Text>
            <Newsletter />
        </div>
    )
}

export default withStyles(styles)(NewsletterContact)
