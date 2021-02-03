/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import Helmet from "react-helmet"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "../../theme"

type Props = {
    children: React.ReactNode,
}

function ProviderLayout(props: Props) {
    const { children } = props;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
            </Helmet>

            {children}
        </ThemeProvider>
    );
}

export default ProviderLayout