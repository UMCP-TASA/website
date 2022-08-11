// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

import { Ref, PureComponent } from "react"
import { SpringConfig } from "./renderprops-universal"
// For the config file
declare module "root/site-config" {
    export const config: {
        siteTitle: string
        siteTitleShort: string
        siteTitleAlt: string
        siteLogo: string
        siteUrl: string
        pathPrefix: string
        siteDescriptionShort: string
        siteDescriptionLong: string
        dateFromFormat: string
        dateFormat: string
        copyright: string
        facebookLink: string
        instagramLink: string
        youtubeLink: string
        discordLink: string
    }
}

// For example, to shim modules without declarations, use:
declare module "gatsby-plugin-mailchimp" {
    export default function addToMailchimp(
        email: string,
        fields?: any,
        endpointOverride?: any
    ): { result: string; msg: string }
}

declare module "react-spring/renderprops-addons" {
    interface ParallaxProps {
        pages: number

        config?: SpringConfig | ((key: string) => SpringConfig)

        scrolling?: boolean

        horizontal?: boolean

        ref?: Ref<Parallax>
    }

    export class Parallax extends PureComponent<ParallaxProps> {
        scrollTo: (offset: number) => void
    }

    interface ParallaxLayerProps {
        factor?: number

        offset?: number

        speed?: number

        className?: string
    }

    export class ParallaxLayer extends PureComponent<ParallaxLayerProps> {}
}

// Custom theme colors
declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        neutral: Palette["primary"]
    }
    interface PaletteOptions {
        neutral: PaletteOptions["primary"]
    }
}

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"
