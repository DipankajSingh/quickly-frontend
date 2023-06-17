import React, { useState } from 'react';
import AppHeading from './AppHeading';
import { useNavigate } from 'react-router-dom';
import { socket } from '../connection/socket';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store';

function Login() {


    const [roomInputValue, setRoomInputValue] = useState('');
    const [nameInputValue, setNameInputValue] = useState('');

    //credencials
    const dispatch = useDispatch();

    const userName = useSelector((state) => {
        const data = state.user.value.userName
        return data
    })

    const navigate = useNavigate()


    const handleRoomInputChange = (e) => {
        setRoomInputValue(e.target.value);
    };

    // navigating to conversation route if user data found in local storage and if valid
    let lclStrgData = localStorage.getItem('userData')
    lclStrgData = JSON.parse(lclStrgData)

    if (lclStrgData) {
        console.log(lclStrgData)
        if (lclStrgData?.userName && lclStrgData?.roomName) {
            if (!socket.connected) {
                socket.connect()
                socket.on('connect', () => {
                    toast('You are online!', { type: 'success' })
                    navigate('/conversation')
                })
            }
        }
    }

    const handleNameInputChange = (e) => {
        setNameInputValue(e.target.value);
        dispatch(login({ userName: nameInputValue }))
    };

    // handle login
    const handleSubmit = async (e) => {

        toast(userName, { type: "info" })
        const userData = {
            userName: nameInputValue,
            roomName: roomInputValue,
            socketId: socket.id
        }

        e.preventDefault();

        if (isFormValid) {
            if (!socket.connected) {
                socket.connect();
                socket.emit('handleLogin', userData)
                socket.on('connect', () => {
                    toast('Logged in!', { type: 'success' })
                    // save login detail to local storage
                    localStorage.setItem('userData', JSON.stringify({ ...userData }))
                    navigate('/conversation')
                })
            }

            else {
                // if already connected to socket
                navigate('/conversation')
                toast('Logged in, Already!', { type: 'success' })

            }
        }
    };

    const isFormValid = roomInputValue.trim() !== '' && nameInputValue.trim() !== '';

    return (
        <div className='bottom-20 text-white h-full w-full relative p-3 flex flex-col justify-center items-center'>
            <AppHeading />

            <div className='bg-slate-800 m-3 max-w-96 items-center flex flex-col min-w-[24rem] px-4 py-2 pb-4'>
                <h2 className='text-lg font-mono mt-5 font-semibold'>Type Room name and user Name</h2>
                <form className='flex mt-5 [&>input]:w-56 gap-1 flex-col' onSubmit={handleSubmit}>
                    <input
                        required
                        value={roomInputValue}
                        className='px-3 outline-none h-12 text-black'
                        type="text"
                        onChange={handleRoomInputChange}
                        placeholder='Enter Room Name'
                    />
                    <input
                        required
                        value={nameInputValue}
                        className='px-3 outline-none h-12 text-black'
                        type="text"
                        onChange={handleNameInputChange}
                        placeholder='Enter User Name'
                    />
                    <button
                        type='submit'
                        href='/'
                        className={`
              grid place-items-center rounded-xl mb-5 mt-3 py-3
              text-center 
              ${isFormValid ? 'hover:bg-green-8hmm00' : ''} ${isFormValid ? 'bg-green-500' : 'cursor-not-allowed bg-gray-500'}
            `}
                        disabled={!isFormValid}
                    >
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
