import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import MessageContainer from './MessageContainer'
import InputTools from './InputTools'



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
