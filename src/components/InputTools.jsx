import React, { useState, useContext } from 'react'
import { MsgCtx } from '../App';
import ReciverBubble from './ReciverBubble';
import ReplyPreview from './ReplyPreview';

function InputTools() {
    const [messages, setMessage] = useContext(MsgCtx);

    const [messageInput, setMessageInput] = useState('')
    return (
        <div className='
        fixed
        flex
        gap-2
        items-center
        justify-center
        bottom-0
        w-full
        h-14
        bg-slate-800
        px-2
        '>
            <input type="text" className='
            w-3/4
            h-11
            rounded
            text-black
            px-3
            outline-none
            '
                value={messageInput}
                onChange={(e) => {
                    setMessageInput(e.target.value)
                }}
                placeholder='Message'
            />
            <button className='relative grid place-items-center p-2 rounded-md bg-green-600'>
                <img className='
                h-6
                w-6
            
            ' src="/send.svg" alt="send" onClick={() => {

                        setMessage([...messages, <ReciverBubble message={messageInput} />])
                    }} /></button>
            <button className='relative grid place-items-center p-2 rounded-md bg-white'>
                <img className='
                h-6
                w-6
            
            ' src="/image.svg" alt="send" /></button>
            <button className='relative grid place-items-center p-2 rounded-md bg-red-600'>
                <img className='
                h-6
                w-6
            
            ' src="/mic.svg" alt="send" /></button>
            <ReplyPreview message={"hiihiihihih"} />
        </div>
    )
}

export default InputTools
