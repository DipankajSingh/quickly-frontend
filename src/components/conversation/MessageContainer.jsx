import React, { useContext, useEffect, useRef } from 'react'
import { MsgCtx } from '../../App';

function MessageContainer() {
    const containerRef = useRef(null)
    const [messages] = useContext(MsgCtx);
    useEffect(() => {
        containerRef.current.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
            inline: 'start'
        })
    })

    return (
        <div ref={containerRef} className="py-20 relative flex flex-grow flex-col px-12 justify-end">
            {messages}
        </div>
    )
}

export default MessageContainer
