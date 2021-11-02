import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    Container,
    Grid,
    IconButton,
    withStyles,
    Toolbar,
    createStyles,
    Theme,
    WithStyles,
} from "@material-ui/core"
import { FooterQuery } from "graphql-types"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            [theme.breakpoints.up("sm")]: {
                padding: theme.spacing(1),
                paddingRight: theme.spacing(2),
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
                    }
                }
            }
        `
    )

    if (!site?.siteMetadata) throw new Error("Site metadata not defined")

    const { facebook, instagram, copyright } = site.siteMetadata

    if (!facebook)
        throw new Error(
            "Facebook link not defined in site metadata. Check gatsby-config"
        )
    if (!instagram)
        throw new Error(
            "Instagram link not defined in site metadata. Check gatsby-config"
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
                    <IconButton href={facebook}>
                        <FacebookIcon />
                    </IconButton>

                    <IconButton href={instagram}>
                        <InstagramIcon />
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
