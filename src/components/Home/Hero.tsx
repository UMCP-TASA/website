import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import HeroImage from "images/hero.png"
import Text from "components/Typography/Text"
import ButtonLink from "components/Button/ButtonLink"

const styles = (theme: Theme) =>
    createStyles({
        containerFluid: {
            padding: 0,
        },
        hero: {
            position: "relative",
            display: "grid",
            gridTemplateAreas: "overlap-content",
            gridArea: "overlap-content",
        },
        taipei101: {
            width: "100%",
            height: "100%",
            maxHeight: "100vh",
            objectFit: "cover",
            overflow: "hidden",
            marginBottom: "2rem",
            objectPosition: "center bottom",
        },
        heroContent: {
            minHeight: 0,
            minWidth: 0,
            maxHeight: "100%",
            [theme.breakpoints.only("xs")]: {
                margin: "1.2rem 0 0 2rem",
            },
            [theme.breakpoints.only("sm")]: {
                margin: "0 0 0 3rem",
            },
            [theme.breakpoints.only("md")]: {
                margin: "0 0 0 7rem",
            },
            [theme.breakpoints.only("lg")]: {
                margin: "0 0 0 8rem",
            },
            [theme.breakpoints.up("xl")]: {
                margin: "0 0 0 9rem",
            },
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
        },
        subtitle: {
            [theme.breakpoints.only("xs")]: {
                padding: "0.2rem 40% 0.2rem 0%",
                lineHeight: "1",
            },
        },
        button: {
            [theme.breakpoints.only("xs")]: {
                fontSize: "0.7rem",
                margin: "0.25rem 0 0 0",
            },
            [theme.breakpoints.only("sm")]: {
                fontSize: "1rem",
                margin: "0.5rem 0 0 0",
            },
            margin: "0.75rem 0 0 0",
        },
    })

type Props = WithStyles<typeof styles>

function Hero(props: Props) {
    const { classes } = props
    return (
        <div className={`${classes.containerFluid} ${classes.hero}`}>
            <img
                className={classes.taipei101}
                src={HeroImage}
                alt="taipei 101"
            />
            <div className={classes.heroContent}>
                <Text variant="h4" color="white">
                    University of Maryland College Park
                </Text>
                <Text variant="h1" color="white">
                    Taiwanese American
                </Text>
                <Text variant="h1" color="white">
                    Student Association
                </Text>
                <Text className={classes.subtitle} variant="h6" color="white">
                    Dedicated to promoting Taiwan's rich culture and heritage
                </Text>
                <ButtonLink
                    className={classes.button}
                    to="#upcoming-events"
                    variant="contained"
                    color="primary"
                >
                    Upcoming Events
                </ButtonLink>
            </div>
        </div>
    )
}

export default withStyles(styles)(Hero)
