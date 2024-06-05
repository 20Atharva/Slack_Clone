import SlackIcon from '../icons/SlackIcon';
import PlusIcon from '../icons/PlusIcon';
import Channel from "./Channel";
import DM from "./DM";
import {channels,dms} from "../constants";


export default function Sidebar() {
    return (
        <div className="flex flex-col bg-gray-950 text-white">
            <div className="sticky top-0 flex items-center gap-4 border-b border-gray-800 p-4">
                <SlackIcon className="h-6 w-6" />
                <h2 className="text-lg font-semibold">Slack</h2>
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Channels</h3>
                <PlusIcon className="h-4 w-4" />
            </div>
            <div className="overflow-auto max-h-[320px]">
                <nav className="space-y-1 p-4">
                    {
                        channels.map((channel) => (
                            <Channel {...channel}/>
                        ))
                    }
                </nav>
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Direct Messages</h3>
            </div>

            <div className="overflow-auto max-h-[230px]">
                <nav className="space-y-1 p-4">
                    {
                        dms.map((dm) => (
                            <DM {...dm}/>
                        ))
                    }
                </nav>
            </div>

            <div className="border-t border-gray-800 p-4">
                <div
                    // variant="ghost"
                    className="flex w-full items-center justify-start gap-3 rounded-md px-3 py-2 text-left text-gray-400 hover:bg-gray-900 hover:text-white"
                >
                    {/* <Avatar className="h-6 w-6 shrink-0">
                        <img src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar> */}
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}