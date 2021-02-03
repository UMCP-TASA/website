/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * Used in gatsby-browser and gatsby-ssr as a wrapper around all pages
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SiteTitleQuery } from "graphql-types"

import AnimatedHeader from "./Header/AnimatedHeader"
import Footer from "./Footer"

type Props = {
    children: React.ReactNode,
}

const Layout = (props: Props) => {
    const { children } = props
    const data = useStaticQuery<SiteTitleQuery>(graphql`
        query SiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    if (!data.site?.siteMetadata?.title) {
        throw new Error("No title provided. Check gatsby-config")
    }

    return (
        <>
            <AnimatedHeader
                title={data.site.siteMetadata.title}
            />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
