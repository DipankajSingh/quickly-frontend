import React from 'react'
import Reply from './Reply'

function SenderBubble({ message }) {
    return (
        <div className="mr-auto select-none rounded-lg rounded-tl-none my-1 p-2 text-sm bg-slate-100 text-black flex flex-col relative speech-bubble-left">
            <Reply position={'right'} />
            <p>{message}</p>
            <p className="text-gray-600 text-xs text-right leading-none">8:45 AM</p>
        </div>
    )
}

export default SenderBubble
