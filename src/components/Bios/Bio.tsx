import React from "react"
import Img from "gatsby-image"
import {
    Card,
    CardContent,
    CardActions,
    Chip,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
    CardActionArea,
} from "@material-ui/core"

// Components
import Text from "components/Typography/Text"
import MarkdownContent from "components/General/MarkdownContent"

// Types
import { BioType } from "hooks/useBios"

const styles = (__: Theme) =>
    createStyles({
        root: {},
        content: {},
        title: {},
        position: {},
        description: {},
        action: {},
        major: {},
    })

type Props = WithStyles<typeof styles> & {
    bioData: BioType
}

function Bio(props: Props) {
    const { classes, bioData } = props
    const { node, image } = bioData

    if (!node.frontmatter)
        throw new Error("Frontmatter does not exist for node")

    const {
        name = "Undefined",
        position = "Undefined",
        majors = [],
    } = node.frontmatter

    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <Img fluid={image.childImageSharp?.fluid} />
                <CardContent>
                    <Text
                        variant="h5"
                        color="textSecondary"
                        className={classes.title}
                    >
                        {name}
                    </Text>
                    <Text variant="subtitle1" className={classes.position}>
                        {position}
                    </Text>
                    <MarkdownContent content={node.html} />
                </CardContent>
            </div>
            <CardActions className={classes.action}>
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
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(Bio)
