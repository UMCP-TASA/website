import React, { useState } from "react"
import Img from "gatsby-image"
import { useSpring, animated as a } from "react-spring"
import {
    Grid,
    Chip,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import Text from "components/Typography/Text"
import MarkdownContent from "components/General/MarkdownContent"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

// Types
import { BioType } from "hooks/useBios"

const styles = (theme: Theme) =>
    createStyles({
        heading: {
            margin: theme.spacing(2),
        },
        flippableRoot: {
            position: "relative",
        },
        back: {
            position: "absolute",
            top: "0px",
            width: "100%",
            height: "100%",
        },
        img: {
            borderRadius: theme.shape.borderRadius,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            zIndex: 10,
            boxShadow: theme.shadows[9],
        },
        filter: {
            borderRadius: theme.shape.borderRadius,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 20,
        },
        content: {
            position: "absolute",
            top: "0px",
            width: "100%",
            height: "100%",
            padding: theme.spacing(2),
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            zIndex: 30,
        },
    })

type Props = WithStyles<typeof styles> & {
    bioData: BioType
}

const AnimatedImg = a(Img)

function Bio(props: Props) {
    const { classes, bioData } = props
    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
        immediate: usePrefersReducedMotion(),
    })

    const { node, image } = bioData

    if (!node.frontmatter)
        throw new Error("Frontmatter does not exist for node")

    const {
        name = "Undefined",
        position = "Undefined",
        majors = [],
    } = node.frontmatter

    return (
        <>
            <div
                className={classes.flippableRoot}
                onMouseOver={() => setFlipped(true)}
                onMouseOut={() => setFlipped(false)}
            >
                <AnimatedImg
                    fluid={image.childImageSharp?.fluid}
                    alt={`${name} bio image`}
                    className={classes.img}
                    style={{
                        opacity: opacity.interpolate((o) => 1 - (o as number)),
                        transform,
                    }}
                />
                <a.div
                    className={classes.back}
                    style={{
                        opacity,
                        transform: transform.interpolate(
                            (t) => `${t} rotateY(180deg)`
                        ),
                    }}
                >
                    <Img
                        fluid={image.childImageSharp?.fluid}
                        className={classes.img}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <div className={classes.filter} />
                    <div className={classes.content}>
                        <div>
                            <MarkdownContent
                                content={node.html}
                                color="white"
                            />
                            <Grid
                                container
                                justify="center"
                                alignItems="flex-start"
                                spacing={1}
                            >
                                {majors.map((major) => (
                                    <Grid item key={name + major}>
                                        <Chip label={major} color="primary" />
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </a.div>
            </div>

            <Text
                variant="h4"
                className={classes.heading}
                color="textSecondary"
                align="center"
            >
                {position}
            </Text>
            <Text
                variant="subtitle1"
                className={classes.heading}
                align="center"
            >
                {name}
            </Text>
        </>
    )
}

export default withStyles(styles)(Bio)
