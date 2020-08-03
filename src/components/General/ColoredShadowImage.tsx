import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import Img, { GatsbyImageProps } from "gatsby-image"
import clsx from "clsx"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
        },
        img: {
            borderRadius: theme.shape.borderRadius,
            zIndex: 20,
        },
        coloredShadow: {           
            borderRadius: theme.shape.borderRadius,
            top: "12px",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            zIndex: 10,     
        },
    })

type Props = WithStyles<typeof styles> &
    GatsbyImageProps & {
        image: GatsbyTypes.Maybe<GatsbyTypes.RaisedImageFragment>
    }

function ColoredShadowImage(props: Props) {
    const { classes, className, image, ...rest } = props
    if (!image) throw new Error(`${name} does not exist`)

    return (
        <div className={classes.root}>
            <Img
                className={clsx(classes.img, className)}
                fluid={image.childImageSharp?.fluid}
                {...rest}
            />
            <Img
                className={classes.coloredShadow}
                fluid={image.childImageSharp?.fluid}
                style={{
                    position: "absolute",
                    overflow: "visible",
                }}
                imgStyle={{
                    transform: "scale(.92)",
                    filter: "blur(12px)",
                    transition: "opacity .45s",
                }}
            />
        </div>
    )
}

export default withStyles(styles)(ColoredShadowImage)
