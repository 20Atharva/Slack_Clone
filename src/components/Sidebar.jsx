import SlackIcon from '../icons/SlackIcon';
import HashIcon from '../icons/HashIcon';

export default function Sidebar() {
    return (
        <div className="flex flex-col bg-gray-950 text-white">
            <div className="sticky top-0 flex items-center gap-4 border-b border-gray-800 p-4">
                <SlackIcon className="h-6 w-6" />
                <h2 className="text-lg font-semibold">Slack</h2>
            </div>
            <div className="flex-1 overflow-auto">
                <nav className="space-y-1 p-4">
                    <div
                        // variant="ghost"
                        className="flex w-full items-center justify-start gap-3 rounded-md px-3 py-2 text-left text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                        <HashIcon className="h-5 w-5" />
                        <span>general</span>
                    </div>
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