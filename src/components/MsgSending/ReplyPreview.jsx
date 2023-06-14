import React from 'react'
function ReplyPreview({ message }) {
    return (
        <div className={`
        
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
