import React from 'react'
import ProfileInfo from './ProfileInfo'
import { socket } from '../connection/socket'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    function handleLoguot() {
        localStorage.clear()
        console.log("hiiii")
        if (socket.connected) {
            socket.disconnect()
            toast("You logged out Successfully!", { type: "info" })
            navigate('/')
        } else {
            toast("Already disconnected to server!", { type: "info" })
            navigate('/')
        }
    }

    return (
        <nav className=' sticky
        h-16
        w-full
        bg-slate-600
        flex
        justify-between
        px-4
        items-center
        top-0
        z-10
        '>
            <ProfileInfo></ProfileInfo>
            <div>
                {/* handling loguot event */}
                <button

                    onClick={handleLoguot}

                    className='
                w-5
                '><img src="/exit.svg" alt="Exit Room" /></button>
            </div>
        </nav>
    )
}

export default Navbar
