import React from "react"
import { Link } from "gatsby"
import { animated, useSpring } from "react-spring"
import {
    AppBar,
    Container,
    Grid,
    Hidden,
    Theme,
    Toolbar,
    withStyles,
    WithStyles,
    createStyles,
    useScrollTrigger,
} from "@material-ui/core"

// Page Components
import Logo from "components/Logo/Logo"
import HeaderLinks from "./HeaderLinks"
import HeaderMenu from "./HeaderMenu"

// Some example styles for the header
const styles = (theme: Theme) =>
    createStyles({
        link: {
            margin: theme.spacing(1),
            textDecoration: "none",
            display: "inline-block",
        },
        grow: {
            flexGrow: 1,
        },
    })

type ComponentProps = {
    title: string
    scrollTrigger?: boolean
}

type Props = WithStyles<typeof styles> & ComponentProps

const AnimatedAppBar = animated(AppBar)

/* Note, the header currently stays at the top of the page instead of the top of the screen
 * This can be changed by setting AppBar position="fixed".
 * Also, we can make the header respond to scrolling by utilizing the scrollTrigger prop
 * as shown in the commented out opacity example
 */
function Header(props: Props) {
    const { classes, title } = props
    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,      
    })
    const animatedStyles = useSpring({
        background: scrollTrigger ? "#ffffffff" : "#ffffff00",
        from: {
            background: "#ffffffff",
        },
    })

    return (
        <AnimatedAppBar
            className={classes.grow}
            position={"fixed"}
            elevation={scrollTrigger ? 10 : 0}
            style={animatedStyles}
        >
            <Toolbar>
                <Container>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Link className={classes.link} to="/">
                                <Logo white={!scrollTrigger} />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Hidden xsDown>
                                {/* Hidden is a component that lets us hide or show things depending on the size of the screen*/}
                                <HeaderLinks scrollTrigger={scrollTrigger} />
                            </Hidden>
                            <Hidden smUp>
                                <HeaderMenu scrollTrigger={scrollTrigger} />
                            </Hidden>
                        </Grid>
                    </Grid>
                    {/* This is here to make sure everything else is right-aligned*/}
                </Container>
            </Toolbar>
        </AnimatedAppBar>
    )
}

export default withStyles(styles)(Header)
