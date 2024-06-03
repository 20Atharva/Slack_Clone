import React from 'react';
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import MessageHistory from "../components/MessageHistory"
import TextArea from "../components/TextArea"

export default function Dashboard(props) {
    return (
        <div className="grid min-h-screen w-full grid-cols-[260px_1fr]">
            <Sidebar/>
      <div className="flex flex-col">
        <Header/>
        <MessageHistory/>
        <TextArea/>
      </div>
    </div>
    )
}