import React from 'react'
import Navbar from '../nav/Navbar'
import MessageContainer from './MessageContainer'
import InputTools from '../MsgSending/InputTools'

function Conversation() {

    return (
        <div className='text-white relative h-screen w-full'>
            <Navbar />
            <MessageContainer />
            <InputTools />
        </div>
    );
}


export default Conversation
