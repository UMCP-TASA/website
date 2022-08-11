import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    Container,
    Grid,
    IconButton,
    withStyles,
    createStyles,
    Theme,
    WithStyles,
} from "@material-ui/core"
import { FooterQuery } from "graphql-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons"

import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.up("sm")]: {
                padding: theme.spacing(1),
                paddingRight: theme.spacing(2),
            },
        },
        icon: {
            [theme.breakpoints.only("xs")]: {
                padding: "0.2rem",
            },
        },
    })

type Props = WithStyles<typeof styles>

function Footer(props: Props) {
    const { classes } = props
    const { site } = useStaticQuery<FooterQuery>(
        graphql`
            query Footer {
                site {
                    siteMetadata {
                        copyright
                        facebook
                        instagram
                        youtube
                        discord
                    }
                }
            }
        `
    )

    if (!site?.siteMetadata) throw new Error("Site metadata not defined")

    const { facebook, instagram, youtube, discord, copyright } =
        site.siteMetadata

    if (!facebook)
        throw new Error(
            "Facebook link not defined in site metadata. Check gatsby-config"
        )
    if (!instagram)
        throw new Error(
            "Instagram link not defined in site metadata. Check gatsby-config"
        )
    if (!youtube)
        throw new Error(
            "YouTube link not defined in site metadata. Check gatsby-config"
        )
    if (!discord)
        throw new Error(
            "Discord link not defined in site metadata. Check gatsby-config"
        )
    if (!copyright)
        throw new Error(
            "Copyright not defined in site metadata. Check gatsby-config"
        )

    return (
        <Container className={classes.root} maxWidth="lg">
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                wrap="nowrap"
            >
                <Grid item>
                    <IconButton className={classes.icon} href={facebook}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </IconButton>

                    <IconButton className={classes.icon} href={instagram}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </IconButton>

                    <IconButton className={classes.icon} href={youtube}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </IconButton>

                    <IconButton className={classes.icon} href={discord}>
                        <FontAwesomeIcon icon={faDiscord} />
                    </IconButton>
                </Grid>
                <Grid item>
                    <Text variant="subtitle1" color="textPrimary">
                        {copyright}
                    </Text>
                </Grid>
            </Grid>
        </Container>
    )
}

export default withStyles(styles, { name: "footer-test" })(Footer)
