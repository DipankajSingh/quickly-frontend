import { Route, Routes } from "react-router-dom";
import Login from "./components/home/Login";
import Conversation from "./components/conversation/Conversation";
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store";

export const MsgCtx = React.createContext()
export const RplTxt = React.createContext()
export const OnlineStatusCtx = React.createContext()

export default function App() {


  const [onlineStatus, setOnlineStatus] = useState("Offline")
  const [messages, setMessages] = useState([])
  const [replyTxt, setReplyTxt] = useState("")

  return (
    <div className="h-screen w-full">
      <Provider store={store}>
        <OnlineStatusCtx.Provider value={[onlineStatus, setOnlineStatus]}>
          <RplTxt.Provider value={[replyTxt, setReplyTxt]}>
            <MsgCtx.Provider value={[messages, setMessages]}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/conversation" element={<Conversation />} />
              </Routes>
            </MsgCtx.Provider>
          </RplTxt.Provider>
        </OnlineStatusCtx.Provider>
      </Provider>
      <ToastContainer position="top-right"
        autoClose={6999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </div >
  )
}