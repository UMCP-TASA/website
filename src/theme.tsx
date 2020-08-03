import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#303f9f",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#8e24aa",
        },
        info: { // We'll use this for the color of text
            main: "#999",
            dark: "#555", 
        },
        neutral: { // Custom color defined in declarations.d.ts
            main: "#ffffff",
            dark: "#555",
            light: "#ffffff",
        },
        text: {
            primary: "#999",
            secondary: "#555",
        }
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    },
})

export default responsiveFontSizes(theme)
