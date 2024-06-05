import React, {useState} from 'react';


import {useAuth} from "../context/authContext"
import ArrowUpIcon from "../icons/ArrowupIcon"
import SendIcon from "../icons/SendIcon"

import {getMessages} from "../utils"

export default function TextArea() {
    const [message, setMessage] = useState("")
    const {currentSrc, setMessages} = useAuth()

    const handleInputChange = (event) => {
        setMessage(event.target.value)
    }

    const onSendMessage = () => {
        if(currentSrc && message.trim().length > 0) {
            const oldMessages = getMessages()
            const newMessages = {
                [currentSrc.type]: {
                    ...oldMessages[currentSrc.type],
                    [currentSrc.metadata.name] : [
                        ...oldMessages[currentSrc.type][currentSrc.metadata.name],
                        {
                            text: message,
                            author: {
                                id: 1,
                                name: "John Doe"
                            },
                            time: new Date()
                        }
                    ]
                }
            }
            setMessages(newMessages)
            localStorage.setItem("messages", JSON.stringify(newMessages))
        }
    }

    return (
        <div className="bg-gray-950 text-white flex items-center gap-4 px-6 h-fit max-h-80 shrink-0">
            <input
                value={message}
                type="text"
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        onSendMessage()
                        e.preventDefault()
                        setMessage("")
                    }
                }}
                placeholder="Message #general"
                className="flex-1 bg-gray-900 border-gray-800 focus:border-gray-700 focus:ring-0 text-sm p-8 my-4"
            />
            <button onClick={onSendMessage} disabled={message.length===0} className="text-gray-400 hover:text-gray-300 disabled:cursor-not-allowed hover:text-gray-400">
                <SendIcon className="h-5 w-5" />
            </button>
        </div>
    )
}