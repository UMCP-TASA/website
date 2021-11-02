import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import { BackgroundImageFragment } from "graphql-types"

import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundPosition: "center center",
            backgroundSize: "cover",
        },
        filter: {
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "rgba(0, 0, 0, 0.6)",
            zIndex: -1,
        },
        content: {
            zIndex: 1,
            width: "100%",
            height: "100%",
            padding: theme.spacing(10),

            [theme.breakpoints.down("xs")]: {
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(3),
            },
        },
    })

type Props = WithStyles<typeof styles> & {
    image: BackgroundImageFragment
    children: React.ReactNode
}

function ImageSection(props: Props) {
    const { classes, image, children } = props
    const bgImage = convertToBgImage(getImage(image))
    return (
        <BackgroundImage className={classes.root} loading="eager" {...bgImage}>
            <div className={classes.filter} />
            <div className={classes.content}>{children}</div>
        </BackgroundImage>
    )
}

export default withStyles(styles)(ImageSection)
