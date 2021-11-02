import React from "react"
import {
    Grid,
    Collapse,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import Text from "components/Typography/Text"
import MarkdownContent from "components/General/MarkdownContent"
import { RaisedImage } from "components/Image"

// Types
import { BioType } from "hooks/useBios"
import theme from "root/src/theme"

const styles = (__: Theme) =>
    createStyles({
        text: {
            marginTop: theme.spacing(1),
        },
    })

type Props = WithStyles<typeof styles> & {
    bioData: BioType
}

function BioPreview(props: Props) {
    const { classes, bioData } = props
    const { node, image } = bioData

    if (!node.frontmatter)
        throw new Error("Frontmatter does not exist for node")

    const { name = "Undefined", position = "Undefined" } = node.frontmatter

    return (
        <Grid container alignItems="stretch" justifyContent="center" spacing={3}>
            <Grid item xs={12} sm={6}>
                <RaisedImage alt={`${name} bio preview`} imageNode={image} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Grid container direction="column" className={classes.text}>
                    <Text variant="h6" color="white">
                        {name}
                    </Text>
                    <Text variant="subtitle1">{position}</Text>

                    <MarkdownContent color="white" content={node.excerpt} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(BioPreview)
