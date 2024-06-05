import HashIcon from "../icons/HashIcon";
import LockIcon from "../icons/LockIcon";
import {useNavigate} from "react-router-dom"

export default function Channel(props) {
    const navigate = useNavigate()

    const handleChannelClick = () => {
        navigate(`./channel/${props.name}`)
    }

    return (
        <div
            onClick={handleChannelClick}
            className="flex w-full items-center justify-start gap-3 rounded-md px-3 py-2 text-left text-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer"
        >
            {
                props.type === "public" ? (
                    <HashIcon className="h-5 w-5" />
                ) : (
                    <LockIcon className="h-5 w-5" />
            )}
            <span>{props.name}</span>
        </div>
    )
}