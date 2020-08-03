import React from "react"
import {
    Typography,
    TypographyProps,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import clsx from "clsx"

const styles = (theme: Theme) =>
    createStyles({
        white: {
            color: "#ffffff",
        },
        success: {
            color: theme.palette.success.main,
        },
        heading: {
            fontFamily: ["Roboto Slab", "Times New Roman", "serif"].join(","),
            // fontWeight: 700,
        },
    })

export interface TextColorOptions {
    color?: TypographyProps["color"] | "white" | "success"
    className?: string
}

type Props = WithStyles<typeof styles> &
    Omit<TypographyProps, "color"> &
    TextColorOptions & {
        heading?: boolean
    }

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function Text(props: Props) {
    const {
        classes,
        className = "",
        color = "initial",
        heading = false,
        ...rest
    } = props

    let textClassName = clsx({
        [className]: true,
        [classes.heading]: heading,
    })

    let passedColor = color

    switch (color) {
        case "white":
            textClassName = clsx(textClassName, classes.white)
            passedColor = "initial"
            break
        case "success":
            textClassName = clsx(textClassName, classes.white)
            passedColor = "initial"
            break
        default:
            passedColor = color
    }

    return (
        <Typography className={textClassName} color={passedColor} {...rest} />
    )
}

export default withStyles(styles)(Text)
