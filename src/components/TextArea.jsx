import ArrowUpIcon from "../icons/ArrowupIcon"
import SendIcon from "../icons/SendIcon"

export default function TextArea() {
    return (
        <div className="bg-gray-950 text-white flex items-center gap-4 px-6 h-fit max-h-80 shrink-0">
            <input
                type="text"
                placeholder="Message #general"
                className="flex-1 bg-gray-900 border-gray-800 focus:border-gray-700 focus:ring-0 text-sm p-8 my-4"
            />
            <button className="text-gray-400 hover:text-gray-300">
                <SendIcon className="h-5 w-5" />
            </button>
        </div>
    )
}