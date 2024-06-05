import React from 'react';
import { useLocation } from "react-router-dom"

import {useAuth} from "../context/authContext"
import Avatar from "../components/Avatar"

export default function MessageHistory() {

    const { pathname } = useLocation()
    const {currentSrc, messages} = useAuth()

    const renderDateAndTime = (date) => {
        date = new Date(date)
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        let hours = date.getHours();
        let minutes = date.getMinutes();

        const period = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;

        minutes = minutes < 10 ? '0' + minutes : minutes;


        return `${month}/${day}/${year} ${hours}:${minutes} ${period}`;
    }

    return (
        <div className="flex-1 overflow-auto p-4">
            <div className="grid gap-4 max-h-[75vh]">
                {
                    currentSrc && messages[currentSrc.type] && messages[currentSrc.type][currentSrc.metadata.name] &&
                    messages[currentSrc.type][currentSrc.metadata.name]?.map((message) => (
                        <div className="flex items-start gap-4">
                            <Avatar className="shrink-0"/>
                            <div className="grid gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="font-medium">{message.author.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {renderDateAndTime(message.time)}
                                    </div>
                                </div>
                                <div>
                                    <p>{message.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}