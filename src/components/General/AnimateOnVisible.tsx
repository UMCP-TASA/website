import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import { useSpring, animated as a } from "react-spring"

import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

type ReactNodes = React.ReactNode | React.ReactNodeArray

type Props = {
    animated?: boolean
    once?: boolean
    partialVisibility?: boolean
    children: ReactNodes | ((args: React.CSSProperties) => ReactNodes)
}

export default (props: Props) => {
    const {
        animated = true,
        once = false,
        partialVisibility = false,
        children,
    } = props
    const [isVisible, setVisible] = useState(!animated)
    const springStyle = useSpring({
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(-10px)",
        },
        immediate: !animated || usePrefersReducedMotion(),
    })

    return (
        <VisibilitySensor
            onChange={(isVisible) => setVisible(isVisible)}
            partialVisibility={partialVisibility}
            active={animated && (!once || !isVisible)}
        >
            {children instanceof Function ? (
                children(springStyle)
            ) : (
                <a.div style={springStyle}>{children}</a.div>
            )}
        </VisibilitySensor>
    )
}
