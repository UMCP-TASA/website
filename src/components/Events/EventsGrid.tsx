import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Hooks
import { EventArrayType } from "hooks/useEvents"

// Components
import Event from "./Event"
import GridWithItems, {
    GridWithItemsProps,
} from "components/General/GridWithItems"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
        },
        item: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    })

type Props = WithStyles<typeof styles> &
    GridWithItemsProps & {
        events: EventArrayType
        showDescription?: boolean
        showFullDescription?: boolean
    }

/**
 * Component that displays the events in a grid.
 * @param props
 */
function EventsGrid(props: Props) {
    const {
        classes,
        showDescription = true,
        showFullDescription = false,
        events,
        ...rest
    } = props

    return (
        <GridWithItems {...rest}>
            {events.length <= 0
                ? [
                      <Text variant="h5" align="center" key={1}>
                          No events to show
                      </Text>,
                  ]
                : events.map((event) => (
                      <Event event={event} key={event.node.id} />
                  ))}
        </GridWithItems>
    )
}

export default withStyles(styles)(EventsGrid)
