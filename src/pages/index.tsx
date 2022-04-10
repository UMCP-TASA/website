import React from "react"
import { graphql, PageProps } from "gatsby"
import {
    Theme,
    Grid,
    createStyles,
    withStyles,
    WithStyles,
    Container,
} from "@material-ui/core"
import { HomePageQuery } from "graphql-types"
import { RaisedImage } from "components/Image"


// Components
import SEO from "components/seo"
import Event from "components/Events/Event"
import GridWithItems from "components/General/GridWithItems"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"
import Newsletter from "components/Mailchimp/Newsletter"

import Section from "components/PageLayout/Section"
import ButtonLink from "components/Button/ButtonLink"
import ImageSection from "components/PageLayout/ImageSection"
import BioPreview from "components/Bios/BioPreview"
import AnimateOnVisible from "components/General/AnimateOnVisible"

// Hooks
import useEvents from "hooks/useEvents"
import useBios from "hooks/useBios"

const styles = (theme: Theme) =>
    createStyles({
        titleRoot: {
            textAlign: "left",
            "& > *": {
                margin: theme.spacing(2),
            },
        },
        bottomMargin: {
            marginBottom: theme.spacing(2),
        },
    })

const calendarStyle = {border: 0, width:"100%", height:"50em",frameborder:0,scrolling:"no"} ;
      
    
type Props = PageProps &
    WithStyles<typeof styles> & {
        data: HomePageQuery
    }

function IndexPage(props: Props) {
    const { data, classes } = props
    const { mainBackground} = data

    if (!mainBackground) throw new Error("Main background does not exist.")

    return (
        <>
            <SEO title="Home" />
            <Grid container spacing={5}>
                        <Grid item xs={12} sm={50}>
                            <RaisedImage
                                imageNode={mainBackground}
                                alt="Angela big little"
                            />
                        </Grid>
                        
                    </Grid>
        </>
    )
}

export const query = graphql`
    query HomePage {
        mainBackground: file(relativePath: { eq: "Taiwan.png" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(IndexPage)
