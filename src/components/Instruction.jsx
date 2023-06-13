import React from 'react'

export default function Instruction() {
    return (
        <div
            className="[&>p]:relative
                 [&>p:before]:left-[-2.5rem] [&>p>span]:rounded [&>p>span]:bg-green-900 [&>p:before]:top-[-.7rem] [&>p:before]:content-['-'] [&>p:before]:text-lime-400 [&>p:before]:absolute [&>p:before]:text-4xl relative inline-block top-9 mx-12">
            <h3 className="text-xl font-semibold font-serif">Usage Instruction: </h3>
            <p className="">Type Your room name and your name saperated by whitespace " ", like this: <span>Ex:
                "friends_for_ever Dipankaj"</span>
            </p>
            <p> Now share your secret room key <span>(friends_for_ever)</span> with someone you want to chat with</p>
            <p> Now when he/she enter your room key <span>friends_for_ever</span>, they automaticaly join your room</p>
        </div>
    )
}
