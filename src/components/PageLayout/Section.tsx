import React from "react"
import {
    Container,
    ContainerProps,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import Text, { TextColorOptions } from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(4),
        },
        title: {
            marginBottom: theme.spacing(2),
        },
    })

type Props = WithStyles<typeof styles> &
    TextColorOptions & {
        maxWidth?: ContainerProps["maxWidth"]
        title?: string
        children: React.ReactNode
    }

function Section(props: Props) {
    const {
        classes,
        maxWidth = "md",
        title,
        color = "textSecondary",
        children,
    } = props

    return (
        <Container maxWidth={maxWidth} className={classes.root}>
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
                spacing={3}
            >
                {title ? (
                    <Text
                        variant="h3"
                        color={color}
                        align="center"
                        className={classes.title}
                        heading
                    >
                        {title}
                    </Text>
                ) : (
                    <></>
                )}
                {children}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(Section)
