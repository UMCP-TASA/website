import { createTheme, responsiveFontSizes } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: "#3D8EFF",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#ff6663",
            contrastText: "#ffffff",
        },
        info: {
            // We'll use this for the color of text
            main: "#999",
            dark: "#555",
        },
        neutral: {
            // Custom color defined in declarations.d.ts
            main: "#ffffff",
            dark: "#555",
            light: "#ffffff",
        },
        text: {
            primary: "#999",
            secondary: "#555",
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: [
            "Readex Pro",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(","),
    },
})

theme.typography.h1 = {
    fontWeight: "bold",
    lineHeight: "1.2",
    [theme.breakpoints.only("xs")]: {
        fontSize: "1.4rem",
    },
    [theme.breakpoints.only("sm")]: {
        fontSize: "2.25rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "4rem",
    },
}

theme.typography.h2 = {
    fontWeight: "bold",
    lineHeight: "1.2",
    [theme.breakpoints.only("xs")]: {
        fontSize: "1.4rem",
    },
    [theme.breakpoints.only("sm")]: {
        fontSize: "2.25rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "3.25rem",
    },
}

theme.typography.h3 = {
    fontWeight: "bold",
    lineHeight: "1.2",
    [theme.breakpoints.only("xs")]: {
        fontSize: "0.75rem",
    },
    [theme.breakpoints.only("sm")]: {
        fontSize: "1.25rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2rem",
    },
}

theme.typography.h4 = {
    fontWeight: "normal",
    lineHeight: "1.2",
    [theme.breakpoints.only("xs")]: {
        fontSize: "0.75rem",
    },
    [theme.breakpoints.only("sm")]: {
        fontSize: "1.25rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2.125rem",
    },
}

theme.typography.h6 = {
    fontWeight: "normal",
    lineHeight: "1.2",
    [theme.breakpoints.only("xs")]: {
        fontSize: "0.75rem",
    },
    [theme.breakpoints.only("sm")]: {
        fontSize: "0.85rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
    },
}

theme.typography.subtitle1 = {
    fontWeight: "bold",
    lineHeight: "2",
    [theme.breakpoints.only("xs")]: {
        fontSize: "0.75rem",
    },
    [theme.breakpoints.only("sm")]: {
        fontSize: "0.85rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
    },
}

theme.typography.body1 = {
    fontWeight: "normal",
    lineHeight: "1.5",
    [theme.breakpoints.only("xs")]: {
        fontSize: "0.75rem",
    },
    [theme.breakpoints.only("sm")]: {
        fontSize: "0.85rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
    },
}

export default theme
