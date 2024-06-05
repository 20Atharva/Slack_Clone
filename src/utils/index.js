import {messages} from "../constants";

export function getMessages(){
    if(!localStorage.getItem("messages")){
        localStorage.setItem("messages", JSON.stringify(messages))
        return messages;
    }
    return JSON.parse(localStorage.getItem("messages"));
}