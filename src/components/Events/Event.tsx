import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import {
    Button,
    Card,
    CardActions,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import Text from "components/Typography/Text"
import MarkdownContent from "components/General/MarkdownContent"

// Types
import { EventType } from "hooks/useEvents"

// Hooks
import useDateFormat from "hooks/useDateFormat"
import ColoredShadowImage from "components/General/ColoredShadowImage"
import ButtonLink from "components/Button/ButtonLink"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            height: "100%",
            flexDirection: "column",
            margin: theme.spacing(1),
            [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0),
            },
        },
        content: {
            marginTop: theme.spacing(2),
        },
        text: {
            textAlign: "center",
        },
        link: {
            textDecoration: "none",
            color: "#ffffff",
        },
        title: {
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
        },
        date: {
            margin: 0,
            marginTop: theme.spacing(1),
        },
        tags: {
            fontSize: "10px",
        },
    })

type Props = WithStyles<typeof styles> & {
    event: EventType
    showDescription?: boolean
    showFullDescription?: boolean
}

function Event(props: Props) {
    const {
        classes,
        event,
        showDescription = true,
        showFullDescription = false,
    } = props
    // const dateFormat = useDateFormat()
    const dateFormat = "M/D"

    if (!event.node.frontmatter) {
        throw new Error("Frontmatter does not exist")
    }

    if (!event.node.fields?.slug) {
        throw new Error("Slug not valid")
    }

    const { title, tags, date, link } = event.node.frontmatter
    const { slug } = event.node.fields

    return (
        <Card elevation={0}>
            <Link to={slug}>
                <ColoredShadowImage
                    image={event.image}
                    alt={`${title} event image`}
                />
            </Link>

            <Grid
                container
                className={classes.content}
                direction="column"
                alignItems="center"
                spacing={1}
            >
                <Grid item>
                    <Text variant="subtitle2" color="primary">
                        {moment(date).format(dateFormat)}
                    </Text>
                </Grid>
                <Grid item>
                    <Text
                        variant="h6"
                        color="textSecondary"
                        align="center"
                        heading
                    >
                        <b>{title}</b>
                    </Text>
                </Grid>

                <Grid item>
                    {showDescription ? (
                        <MarkdownContent
                            // className={classes.text}
                            content={event.node.html}
                        />
                    ) : (
                        <></>
                    )}
                </Grid>
            </Grid>

            <CardActions>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={2}
                >
                    <Grid item>
                        <Button size="small" href={link} variant="contained">
                            FB
                        </Button>
                    </Grid>
                    <Grid item>
                        <ButtonLink size="small" to={slug} variant="contained">
                            Event Details
                        </ButtonLink>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(Event)
