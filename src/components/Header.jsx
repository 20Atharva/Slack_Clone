import React, {useEffect} from 'react';
import {useAuth} from "../context/authContext"
import { useLocation } from 'react-router-dom';

import EllipsisVerticalIcon from "../icons/EllipsisVerticalIcon";
import SearchIcon from "../icons/SearchIcon";
import Channel from "../components/Channel";
import DM from "../components/DM";

import {channels, dms} from "../constants"

export default function Header() {

    const location = useLocation()
    const {currentSrc, setCurrentSrc} = useAuth()

    useEffect(() => {
      const srcName = location.pathname.split('/')[1]
      const subSrcName = location.pathname.split('/')[2]
      if(!srcName || !subSrcName) return
      else if(srcName === "channel"){
        const currChannel = channels.find(channel => channel.name === subSrcName)
        setCurrentSrc({
          type: "channel",
          metadata: currChannel
        })
      } else if(srcName === "dms"){
        const currentDm = dms.find(dm => dm.name === subSrcName)
        setCurrentSrc({
          type: "dms",
          metadata: currentDm
        })
      }
    },[location])

    return (
        <div className="bg-gray-950 text-white flex items-center justify-between px-6 h-14 shrink-0">
          <h2 className="text-lg font-semibold">
            {
              currentSrc && (
                currentSrc.type === "channel" ? (
                  <Channel {...currentSrc.metadata}/>
                ) : (
                  <DM {...currentSrc.metadata}/>
                )
              )
            }
          </h2>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-300">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-300">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
    )
}