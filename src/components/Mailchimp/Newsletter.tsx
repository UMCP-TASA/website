import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {
    Button,
    Container,
    CircularProgress,
    Grid,
    Theme,
    createStyles,
    WithStyles,
    withStyles,
    TextField,
} from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import { ContainerProps } from "@material-ui/core/Container"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(2),
            backgroundColor: "white",
            padding: theme.spacing(2),
            paddingLeft: theme.spacing(3),
            width: "100%",
            borderRadius: theme.shape.borderRadius,
        },
        textField: {
            marginBottom: theme.spacing(1),
            [theme.breakpoints.down("xs")]: {
                marginLeft: theme.spacing(2),
            },
        },
        icon: {
            marginTop: theme.spacing(1),
        },
        button: {
            height: "100%",
        },
    })

type Props = WithStyles<typeof styles> & {
    maxWidth?: ContainerProps["maxWidth"]
}

function Newsletter(props: Props) {
    const { classes, maxWidth = "lg" } = props
    const [email, setEmail] = useState<string>("")
    const [msg, setMsg] = useState<React.ReactNode>()
    const [disabled, setDisabled] = useState<boolean>(false)

    const handleChange = (event: React.FormEvent<EventTarget>) =>
        setEmail((event.target as HTMLInputElement).value)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setDisabled(true)
        setMsg(
            <Text align="center">
                Sending... <CircularProgress size={20} />
            </Text>
        )

        const response = await addToMailchimp(email)
        if (response.result === "error") {
            if (response.msg.toLowerCase().includes("already subscribed")) {
                setMsg(
                    <Text color="error" align="center">
                        You are already on this list!
                    </Text>
                )
            } else {
                setMsg(
                    <Text color="error" align="center">
                        Some error occured while subscribing to list.
                    </Text>
                )
            }
            setDisabled(false)
        } else {
            setMsg(
                <Text color="success" align="center">
                    Successfully added to list! Please check your email and
                    confirm registration.
                </Text>
            )
        }
    }

    return (
        <Container maxWidth={maxWidth} className={classes.root}>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                >
                    <Grid item xs={1}>
                        <EmailIcon className={classes.icon} />
                    </Grid>
                    <Grid item xs={10} sm={8}>
                        <TextField
                            required
                            className={classes.textField}
                            label="Email"
                            name="email"
                            fullWidth
                            value={email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Button
                            disabled={disabled}
                            type="submit"
                            className={classes.button}
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Subscribe
                        </Button>
                    </Grid>
                    {msg !== undefined ? (
                        <Grid item xs={12}>
                            {msg}
                        </Grid>
                    ) : (
                        <></>
                    )}
                </Grid>
            </form>
        </Container>
    )
}

export default withStyles(styles)(Newsletter)
