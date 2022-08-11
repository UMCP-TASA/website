// Note that type is defined in src/declarations.d.ts
const config = {
    siteTitle: "UMCP TASA", // Site title.
    siteTitleShort: "UMCP TASA", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "UMCP Taiwanese American Student Association", // Alternative site title for SEO.
    siteLogo: "src/images/logo.png", // Logo used for SEO and manifest.
    siteUrl: "https://umcptasa.com", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
    siteDescriptionShort:
        "University of Maryland, College Park Taiwanese American Student Association",
    siteDescriptionLong:
        "University of Maryland, College Park Taiwanese American Student Association", // Website description used for RSS feeds/meta description tag.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "MMM D, YYYY", // Date format for display.
    copyright: `Copyright © ${new Date().getFullYear()} UMCP TASA`, // Copyright string for the footer of the website and RSS feed.
    facebookLink: "https://www.facebook.com/umcptasa/",
    instagramLink: "https://www.instagram.com/umcptasa/",
    youtubeLink: "https://www.youtube.com/channel/UC40-b0_FuCsHA1lM0vCZsng",
    discordLink: "https://discord.gg/ppbFshcaFG",
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
    config.pathPrefix = ""
} else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1)

module.exports = { config }
