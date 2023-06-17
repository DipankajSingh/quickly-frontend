import React, { useEffect } from 'react'
import Navbar from '../nav/Navbar'
import MessageContainer from './MessageContainer'
import InputTools from '../MsgSending/InputTools'
import { socket } from '../connection/socket'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Conversation() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('userData')) {
            let userData = localStorage.getItem('useData')
            console.log(userData)
            userData = JSON.parse(userData);
            console.log(userData)
            if (userData?.userName && userData?.roomName) {
                if (!socket.connected) {
                    socket.connect()
                    socket.on('connect', () => {
                        toast('You are online!', { type: 'success' })

                        navigate('/conversation')
                    })
                } else {
                    navigate('/conversation')
                }
            }

        } else {
            navigate('/')
        }
    })
    // set if no localStorage found
    return (
        <div className='text-white relative h-screen w-full'>
            <Navbar />
            <MessageContainer />
            <InputTools />
        </div>
    );
}


export default Conversation
