const path = require("path")
const urljoin = require("url-join")
const config = require("./site-config").config
require("dotenv").config() // for later use with environment variables

module.exports = {
    pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
    siteMetadata: {
        siteUrl: urljoin(config.pathPrefix, config.siteUrl),
        title: config.siteTitle,
        description: config.siteDescriptionShort,
        dateFromFormat: config.dateFromFormat,
        dateFormat: config.dateFormat,
        copyright: config.copyright,
        facebook: config.facebookLink,
        instagram: config.instagramLink,
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-material-ui",
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    root: path.resolve(__dirname),
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "static",
                path: `${__dirname}/static/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "events",
                path: `${__dirname}/content/events/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "bios",
                path: `${__dirname}/content/bios/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "order",
                path: `${__dirname}/content/options/`,
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Roboto", "Roboto Slab"],
                },
            },
        },
        {
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint:
                    "https://umcptasa.us15.list-manage.com/subscribe/post?u=61d5181acf601a2c75626d426&amp;id=c778997225", // string; add your MC list endpoint here; see instructions below
                timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 672,
                        },
                    },
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-autolink-headers",
                ],
            },
        },
        "gatsby-plugin-netlify",
        "gatsby-plugin-netlify-cms",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-typegen",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: config.siteTitle,
                short_name: config.siteTitleShort,
                start_url: config.pathPrefix,
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "static/logo.png", // This path is relative to the root of the site.
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        "gatsby-plugin-offline",
    ],
}
