import React from "react"
import {
    Grid,
    GridProps,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
    useMediaQuery,
} from "@material-ui/core"

// Hooks
import { BioArrayType } from "hooks/useBios"

// Components
import Bio from "./Bio"
import FlippableBio from "./FlippableBio"
import GridWithItems, {
    GridWithItemsProps,
} from "components/General/GridWithItems"
import Text from "components/Typography/Text"

const styles = (theme: Theme) => createStyles({})

type Props = WithStyles<typeof styles> &
    GridWithItemsProps & {
        bios: BioArrayType
    }

function BioGrid(props: Props) {
    const { classes, bios, ...rest } = props
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"))

    return (
        <GridWithItems {...rest} sm={6} lg={4}>
            {bios.length <= 0
                ? [
                      <Text variant="h5" align="center" key={1}>
                          No bios to show
                      </Text>,
                  ]
                : bios.map((bio) =>
                      matches ? (
                          <FlippableBio bioData={bio} key={bio.node.id} />
                      ) : (
                          <Bio bioData={bio} key={bio.node.id} />
                      )
                  )}
        </GridWithItems>
    )
}

export default withStyles(styles)(BioGrid)
