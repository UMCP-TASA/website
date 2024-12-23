import React from "react"
import { Link } from "gatsby"
import {
    Button,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import Section from "components/PageLayout/Section"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        margin: {
            marginTop: theme.spacing(2),
        },
    })

type Props = WithStyles<typeof styles> & {
    title: string
    boardLink?: string
    eventsLink?: string
}

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function ArchiveSection(props: Props) {
    const { classes, title, boardLink, eventsLink } = props

    return (
        <Section>
            <Text variant="h5" align="center" color="textSecondary">
                {title}
            </Text>
            <Grid
                container
                className={classes.margin}
                alignItems="center"
                justifyContent="center"
                spacing={3}
            >
                <Grid item>
                    {boardLink ? (
                        <Link to={boardLink}>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Board
                            </Button>
                        </Link>
                    ) : (
                        <></>
                    )}
                </Grid>
                <Grid item>
                    {eventsLink ? (
                        <Link to={eventsLink}>
                            <Button
                                href={eventsLink}
                                variant="contained"
                                color="primary"
                            >
                                Events
                            </Button>
                        </Link>
                    ) : (
                        <></>
                    )}
                </Grid>
            </Grid>
        </Section>
    )
}

export default withStyles(styles)(ArchiveSection)
