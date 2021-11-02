import React from "react"
import { graphql } from "gatsby"
import {
    GatsbyImage,
    GatsbyImageProps,
    getImage,
    IGatsbyImageData,
} from "gatsby-plugin-image"
import { Theme, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { Maybe, RaisedImageFragment } from "root/graphql-types"

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
    },
}))

type Props = Omit<GatsbyImageProps, "image"> & {
    imageNode: Maybe<RaisedImageFragment>
}

function RaisedImage(props: Props) {
    const { className, imageNode, alt, ...rest } = props
    const classes = useStyles()

    console.log(imageNode)
    
    if (!imageNode) throw new Error(`${alt} image not found`)
    const image = getImage(imageNode)

    return (
        <GatsbyImage
            className={clsx(classes.root, className)}
            image={image}
            alt={alt}
            {...rest}
        />
    )
}

export default RaisedImage

export const raisedImageQueryFragment = graphql`
    fragment RaisedImage on File {
        id
        childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: [WEBP])
        }
    }
`
