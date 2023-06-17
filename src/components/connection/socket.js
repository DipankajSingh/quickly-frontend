import { toast } from "react-toastify";
import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

export const socket = io(URL, {
    autoConnect: false,
    reconnection: false
})

socket.on('connect_error', (error) => {
    toast(`Couldn't connect due to ${error.message}`, { type: 'error' })
})