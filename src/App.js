import { Route, Routes } from "react-router-dom";
import Login from "./components/home/Login";
import Conversation from "./components/conversation/Conversation";
import './App.css'
import React, { useState } from "react";

export const MsgCtx = React.createContext()
export const RplTxt = React.createContext()

export default function App() {
  const [messages, setMessages] = useState([])
  const [replyTxt, setReplyTxt] = useState("")

  return (
    <div className="h-screen w-full">
      <RplTxt.Provider value={[replyTxt, setReplyTxt]}>
        <MsgCtx.Provider value={[messages, setMessages]}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/conversation" element={<Conversation />} />
          </Routes>
        </MsgCtx.Provider>
      </RplTxt.Provider>
    </div >
  )
}