import React from "react"
import {
    Container,
    ContainerProps,
    Grid,
    GridProps,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

const styles = (theme: Theme) =>
    createStyles({
        item: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    })

export interface GridWithItemsProps extends GridProps {
    maxWidth?: ContainerProps["maxWidth"]
}

type Props = WithStyles<typeof styles> &
    GridWithItemsProps & {
        children: React.ReactNodeArray
    }

/**
 * Component that displays items in a grid.
 * @param props
 */
function GridWithItems(props: Props) {
    const {
        classes,
        children,
        maxWidth = "xl",
        xs = 12,
        sm = 4,
        md = false,
        lg = false,
        xl = false,
        spacing = 3,
        alignItems = "stretch",
        alignContent = "stretch",
        justify = "center",
        ...rest
    } = props

    return (
        <Container maxWidth={maxWidth}>
            <Grid
                container
                spacing={spacing}
                alignItems={alignItems}
                alignContent={alignContent}
                justify={justify}
                {...rest}
            >
                {children.map((child, index) => (
                    <Grid
                        item
                        className={classes.item}
                        xs={xs}
                        sm={sm}
                        md={md}
                        lg={lg}
                        xl={xl}
                        key={index}
                    >
                        {child}
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(GridWithItems)
