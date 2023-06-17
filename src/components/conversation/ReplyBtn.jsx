import React from 'react'

function Reply({ position }) {

    return (
        <button className={`
            absolute
            ${position === "right" ? 'right-[-2rem]' : 'left-[-2rem]'}
            top-0
            w-7
            `}><img src="/reply.svg" alt="" /></button>
    )
}

export default Reply
