/**
 * Inspired by
 * https://github.com/creativetimofficial/material-kit-react/blob/master/src/components/Parallax/Parallax.js
 */

import React from "react"
import { graphql } from "gatsby"
import {
    Grid,
    GridProps,
    Theme,
    withStyles,
    WithStyles,
    createStyles,
} from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import { useSpring, animated, config } from "react-spring"

import useParallax from "hooks/useParallax"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

type StyleProps = {
    imageHeight?: string
}

const AnimatedGrid = animated(Grid)

const styles = (theme: Theme) =>
    createStyles({
        root: {
            height: (props: StyleProps) =>
                props.imageHeight ? props.imageHeight : "80vh",
            //maxHeight: "1000px",
            overflow: "hidden",
            position: "relative",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            margin: "0",
            padding: "0",
            border: "0",
        },
        filter: {
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
        },
        raised: {
            zIndex: 1,
            width: "100%",
            height: "100%",
            margin: "auto",
            textAlign: "center",
        },
    })

type Props = WithStyles<typeof styles> &
    StyleProps & {
        image: GatsbyTypes.BackgroundImageFragment
        children?: React.ReactNode
        justify?: GridProps["justify"]
        animated?: boolean,
    }

function ParallaxBackground(props: Props) {
    const { classes, image, justify = "center", animated = true, children } = props
    const { transform } = useParallax()
    const springStyle = useSpring({
        from: { opacity: 0, transform: "translate(-30px)" },
        to: { opacity: 1, transform: "translate(0px)" },
        config: { clamp: true, ...config.molasses },
        immediate: !animated || usePrefersReducedMotion(),
    })
    return (
        <BackgroundImage
            className={classes.root}
            fluid={image.childImageSharp?.fluid}
            style={{ transform: transform }}
            loading="eager"
        >
            <div className={classes.filter} />
            <Grid
                className={classes.raised}
                container
                alignItems="center"
                justify={justify}
            >
                <AnimatedGrid item xs={12} style={springStyle}>
                    {children}
                </AnimatedGrid>
            </Grid>
        </BackgroundImage>
    )
}

export default withStyles(styles)(ParallaxBackground)

export const imageQueryFragment = graphql`
    fragment BackgroundImage on File {
        childImageSharp {
            fluid(quality: 100, pngQuality: 100, maxHeight: 1000) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
    }
`
