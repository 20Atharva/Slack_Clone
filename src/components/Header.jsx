import React from 'react';
import SearchIcon from "../icons/SearchIcon";
import EllipsisVerticalIcon from "../icons/EllipsisVerticalIcon";

export default function Header() {
    return (
        <div className="bg-gray-950 text-white flex items-center justify-between px-6 h-14 shrink-0">
          <h2 className="text-lg font-semibold">#general</h2>
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