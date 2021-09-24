/**
 * Inspired by
 * https://github.com/creativetimofficial/material-kit-react/blob/master/src/components/Parallax/Parallax.js
 */

import React from "react"
import { graphql } from "gatsby"
import { Grid, GridProps, Theme, makeStyles } from "@material-ui/core"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { BackgroundImageFragment } from "graphql-types"
import { useSpring, animated, config } from "react-spring"

import useParallax from "hooks/useParallax"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

type StyleProps = {
    imageHeight?: string
}

const AnimatedGrid = animated(Grid)

const useStyles = makeStyles({
    root: {
        height: (props: StyleProps) =>
            props.imageHeight ? props.imageHeight : "80vh",
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

type Props = StyleProps & {
    image: BackgroundImageFragment
    children?: React.ReactNode
    justify?: GridProps["justifyContent"]
    animated?: boolean
}

function ParallaxBackground(props: Props) {
    const { image, justify = "center", animated = true, children } = props
    const classes = useStyles(props)
    const { transform } = useParallax()
    const springStyle = useSpring({
        from: { opacity: 0, transform: "translate(-30px)" },
        to: { opacity: 1, transform: "translate(0px)" },
        config: { clamp: true, ...config.molasses },
        immediate: !animated || usePrefersReducedMotion(),
    })

    const bgImage = convertToBgImage(getImage(image))
    return (
        <BackgroundImage
            className={classes.root}
            style={{ transform: transform }}
            loading="eager"
            {...bgImage}
        >
            <div className={classes.filter} />
            <Grid
                className={classes.raised}
                container
                alignItems="center"
                justifyContent={justify}
            >
                <AnimatedGrid item xs={12} style={springStyle}>
                    {children}
                </AnimatedGrid>
            </Grid>
        </BackgroundImage>
    )
}

export default ParallaxBackground

export const imageQueryFragment = graphql`
    fragment BackgroundImage on File {
        childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [WEBP])
        }
    }
`
