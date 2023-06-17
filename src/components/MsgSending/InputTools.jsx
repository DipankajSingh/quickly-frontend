import React, { useState, useContext, useRef } from 'react'
import { MsgCtx } from '../../App';
import ReciverBubble from '../conversation/ReciverBubble';
import ReplyPreview from './ReplyPreview';
// import { toast } from 'react-toastify';
import { socket } from '../connection/socket';

function InputTools() {
    const [messages, setMessage] = useContext(MsgCtx);
    const messageInputRef = useRef()
    // const [isReplying, setIsReplying] = useState(false)
    // const messageDetail={
    //     messages,
    //     senderName:
    // }
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
            <input type="text" ref={messageInputRef} className='
            w-3/4
            h-11
            rounded
            text-black
            px-3
            outline-none
            '
                onKeyDown={(e) => {
                    let os = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
                    if (os === 'Win32') {
                        if (e.key === 'Enter') {
                            socket.emit("handleMessageSending",)
                            setMessage([...messages, <ReciverBubble message={messageInput} />])
                            setMessageInput('')
                            messageInputRef.current.focus()
                        }
                    }
                }}
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
                        setMessageInput('')
                        messageInputRef.current.focus()
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
