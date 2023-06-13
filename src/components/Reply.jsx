import React, { useContext } from 'react'
import { RplTxt } from '../App'

function Reply({ position }) {
    const replyProp = useContext(RplTxt)

    return (
        <button onClick={(e) => {
            replyProp[1](e.target.parentElement.childNodes[1].innerText)
        }} className={
            `
            absolute
            ${position === "right" ? 'right-[-2rem]' : 'left-[-2rem]'}
            top-0
            w-7
            `
        }><img src="/reply.svg" alt="" /></button>
    )
}

export default Reply
