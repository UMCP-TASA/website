import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faMagnifyingGlass,
    faPeopleArrows,
    faComments,
    faBullhorn,
    faHandshakeSimple,
    faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons"

import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        container: {
            [theme.breakpoints.only("xs")]: {
                padding: "1rem 20%",
            },
            [theme.breakpoints.only("sm")]: {
                padding: "1rem 10%",
            },
            [theme.breakpoints.up("md")]: {
                padding: "2rem 15%",
            },
            margin: 0,
            width: "100%",
            backgroundColor: "white",
            textAlign: "center",
        },
        grid: {
            display: "grid",
            gap: "0.75rem",
            [theme.breakpoints.only("sm")]: {
                gridTemplateColumns: "repeat(2, 1fr)",
            },
            [theme.breakpoints.up("md")]: {
                gap: "1.5rem",
                gridTemplateColumns: "repeat(3, 1fr)",
            },
        },
        goal: {
            textAlign: "center",
        },
        icon: {
            color: "secondary",
        },
    })

type Props = WithStyles<typeof styles>

function Goals(props: Props) {
    const { classes } = props

    return (
        <div className={classes.container}>
            <Text variant="h2" color="primary">
                Our Goals
            </Text>
            <Text variant="h6" color="textPrimary" align="center">
                At TASA, we aim to provide these functions:
            </Text>
            <Text variant="body1">
                <br></br>
            </Text>
            <div className={classes.grid}>
                <div className={classes.goal}>
                    <Text variant="h2" color="secondary">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Text>
                    <Text variant="h3" color="textSecondary">
                        AWARENESS
                    </Text>
                    <Text variant="body1" color="textPrimary">
                        {
                            "Promote awareness of Taiwanese and Taiwanese American culture, language, history, and current affairs"
                        }
                    </Text>
                </div>
                <div className={classes.goal}>
                    <Text variant="h2" color="secondary">
                        <FontAwesomeIcon icon={faPeopleArrows} />
                    </Text>
                    <Text variant="h3" color="textSecondary">
                        LIAISON
                    </Text>
                    <Text variant="body1" color="textPrimary">
                        {
                            "Serve as the liaison for the Taiwanese and Taiwanese American individuals at the University of Maryland, College Park"
                        }
                    </Text>
                </div>
                <div className={classes.goal}>
                    <Text variant="h2" color="secondary">
                        <FontAwesomeIcon icon={faComments} />
                    </Text>
                    <Text variant="h3" color="textSecondary">
                        FORUM
                    </Text>
                    <Text variant="body1" color="textPrimary">
                        {
                            "Provide the forum needed for the exchange of information, ideas, and feelings among individuals of the Taiwanese and Taiwanese American community"
                        }
                    </Text>
                </div>
                <div className={classes.goal}>
                    <Text variant="h2" color="secondary">
                        <FontAwesomeIcon icon={faBullhorn} />
                    </Text>
                    <Text variant="h3" color="textSecondary">
                        INFORM
                    </Text>
                    <Text variant="body1" color="textPrimary">
                        {
                            "Inform students and members at the university on the various political news in the Taiwanese community"
                        }
                    </Text>
                </div>
                <div className={classes.goal}>
                    <Text variant="h2" color="secondary">
                        <FontAwesomeIcon icon={faHandshakeSimple} />
                    </Text>
                    <Text variant="h3" color="textSecondary">
                        SUPPORT
                    </Text>
                    <Text variant="body1" color="textPrimary">
                        {
                            "Support social and educational events and develop programs that will benefit the Taiwanese and Taiwanese American community as a whole"
                        }
                    </Text>
                </div>
                <div className={classes.goal}>
                    <Text variant="h2" color="secondary">
                        <FontAwesomeIcon icon={faPeopleRoof} />
                    </Text>
                    <Text variant="h3" color="textSecondary">
                        RELATIONSHIPS
                    </Text>
                    <Text variant="body1" color="textPrimary">
                        {
                            "Develop strong relationships with other organizations at the University of Maryland, the administration, and other organizations nationwide, in order to communicate and fulfill our needs and goals"
                        }
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Goals)
