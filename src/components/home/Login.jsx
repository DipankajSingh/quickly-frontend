import React, { useState } from 'react';
import AppHeading from './AppHeading';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [roomInputValue, setRoomInputValue] = useState('');
    const [nameInputValue, setNameInputValue] = useState('');
    const navigate = useNavigate()
    const handleRoomInputChange = (e) => {
        setRoomInputValue(e.target.value);
    };

    const handleNameInputChange = (e) => {
        setNameInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/conversation')
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
