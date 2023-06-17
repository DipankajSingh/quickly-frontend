import React from 'react'
import Reply from './ReplyBtn'

function ReciverBubble({ message }) {
    return (
        <div
            className="ml-auto select-none rounded-lg rounded-tr-none my-1 p-2 text-sm bg-slate-700 flex flex-col relative speech-bubble-right">
            <Reply position={'left'}></Reply>
            <p >{message}</p>
            <p className="text-gray-300 text-xs text-right leading-none">8:00 AM</p>
        </div>
    )
}

export default ReciverBubble
