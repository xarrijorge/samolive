const FormLink = 'https://xarri.typeform.com/to/M7VZvLZB'
import React, { useRef, useEffect } from 'react'
import * as typeformEmbed from '@typeform/embed'

const RSVP = () => {
    const typeformRef = useRef(null)

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, FormLink, {
            hideFooter: true,
            hideHeaders: true,
            hideScrollbars: true,
            opacity: 0,
        })
    }, [typeformRef])

    return <div className="rsvpForm" ref={typeformRef}></div>
}

export default RSVP
