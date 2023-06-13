import React, { useContext } from 'react'
import { RplTxt } from '../App'
function ReplyPreview({ message }) {
    const [replyTxt, setReplyTxt] = useContext(RplTxt)
    return (
        <div className={`
        ${replyTxt === "" ? "hidden" : ""}
        absolute
        bg-slate-700
        w-[80%]
        left-1/2
        replyPreview
        bottom-[115%]
        rounded-lg
        p-4
        `}>
            <span className='
            inline-block
            h-max
            w-full
            border-l-[4px]
            border-green-600
            text-black
          bg-white
          py-3
          px-2
            '>{message}</span>
            <button
                onClick={(e) => {
                    e.target.parentElement.classList.add('hidden')
                }}
                className='
            absolute
            text-black
            right-[1.5rem]
            top-[.7rem]
            text-2xl
            font-extrabold
            '>x</button>
        </div>
    )
}

export default ReplyPreview
