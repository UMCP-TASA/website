import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import SEO from "components/seo"
import Hero from "components/Home/Hero"
import Welcome from "components/Home/Welcome"
import Goals from "components/Home/Goals"
import UpcomingEvents from "components/Home/UpcomingEvents"

import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../theme"

const styles = (theme: Theme) =>
    createStyles({
        parent: { backgroundColor: "white" },
    })

type Props = WithStyles<typeof styles>

function IndexPage(props: Props) {
    const { classes } = props

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.parent}>
                <SEO title="Home" />
                <Hero />
                <Welcome />
                <Goals />
                <UpcomingEvents />
            </div>
        </ThemeProvider>
    )
}

export default withStyles(styles)(IndexPage)
