import React from "react"

import HeaderLink from "./HeaderLink"

type Props = {
    scrollTrigger?: boolean
}

/**
 * You can add additional links here. Icons and the such also go here
 * @param props
 */
function HeaderLinks(props: Props) {
    const { scrollTrigger = true } = props
    return (
        <>
            <HeaderLink to="/" text="Home" scrollTrigger={scrollTrigger} />
            <HeaderLink
                to="/about"
                text="About"
                scrollTrigger={scrollTrigger}
            />
            <HeaderLink
                to="/events"
                text="Program"
                scrollTrigger={scrollTrigger}
            />
            <HeaderLink
                to="/board"
                text="Tickets"
                scrollTrigger={scrollTrigger}
            />
            <HeaderLink
                to="/archive"
                text="Misc"
                scrollTrigger={scrollTrigger}
            />
            <HeaderLink
                to="/contact-us"
                text="Contact Us"
                scrollTrigger={scrollTrigger}
            />
        </>
    )
}

export default HeaderLinks
