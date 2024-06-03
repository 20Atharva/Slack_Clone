export default function MessageHistory() {
    return (
        <div className="flex-1 overflow-auto p-4">
            <div className="grid gap-4">
                <div className="flex items-start gap-4">
                    {/* <Avatar className="h-10 w-10 shrink-0">
                        <img src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar> */}
                    <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                            <div className="font-medium">John Doe</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">2:39 PM</div>
                        </div>
                        <div>
                            <p>Hey everyone, how\'s it going?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}