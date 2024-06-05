import Avatar from "./Avatar"
import {useNavigate} from "react-router-dom"


export default function DirectMessage(props) {
    const navigate = useNavigate()

    
    const handleNavigateDM = () => {
        navigate(`./dms/${props.name}`)
    }
    return (
        <div
            onClick={handleNavigateDM}
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer"
        >
            <div className="flex items-center gap-2">
                <Avatar avatarClassName={"h-6 w-6"} className="h-6 w-6 border"></Avatar>
                <span>{props.renderName}</span>
            </div>
        </div>
    )
}