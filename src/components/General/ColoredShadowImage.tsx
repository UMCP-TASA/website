import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"
import clsx from "clsx"
import { RaisedImageFragment, Maybe } from "graphql-types"

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
        image: Maybe<RaisedImageFragment>
    }

function ColoredShadowImage(props: Props) {
    const { classes, className, image, ...rest } = props
    if (!image) throw new Error(`Image does not exist`)

    return (
        <div className={classes.root}>
            <GatsbyImage
                className={clsx(classes.img, className)}
                image={image.childImageSharp?.gatsbyImageData}
                {...rest}
            />
            <GatsbyImage
                className={classes.coloredShadow}
                image={image.childImageSharp?.gatsbyImageData}
                alt="Background"
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
