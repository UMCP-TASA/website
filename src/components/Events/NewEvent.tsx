import React from "react"
import {
    Button,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        event: {
            minWidth: 0,
            minHeight: 0,
            width: "100%",
            textAlign: "center",
        },
        image: {
            width: "100%",
            borderRadius: "15px",
        },
        button: {
            backgroundColor: "#E0FF4F",
            color: "#555",
            [theme.breakpoints.down("sm")]: {
                padding: "0.5rem",
            },
            [theme.breakpoints.up("md")]: {
                padding: "0.75rem",
            },
        },
    })

type Props = WithStyles<typeof styles> & {
    image: string
    title: string
    date: string
    link: string
    className?: string
}

function Event(props: Props) {
    const { classes, className = "", image, title, date, link } = props

    return (
        <div className={classes.event}>
            <img className={classes.image} src={image} alt={title} />
            <Text variant="h3" color="textSecondary">
                {title}
            </Text>
            <Text variant="subtitle1" color="textPrimary">
                {date}
            </Text>
            <Button className={classes.button} href={link} variant="contained">
                Learn More
            </Button>
        </div>
    )
}

export default withStyles(styles)(Event)
