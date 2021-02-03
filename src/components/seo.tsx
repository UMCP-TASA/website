/**
 * SEO stands for Search Engine Optimization
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SeoQuery } from "graphql-types"

type MetaType = {
    name: string
    content: string
}

type SEOProps = {
    lang?: string
    meta?: MetaType[]
    description?: string
    title: string
}

const SEO = (props: SEOProps) => {
    const { lang = "en", meta = [], description = "", title } = props // assignment means default props
    const { site } = useStaticQuery<SeoQuery>(
        graphql`
            query SEO {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )

    if (!site?.siteMetadata?.title || !site?.siteMetadata?.description) {
        throw new Error(
            "Either title or description not defined in siteMetadata. Check gatsby-config"
        )
    }

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta)}
        />
    )
}

export default SEO
