import SampleUser from "../icons/SampleUser"

export default function Avatar(props) {
    return(
        <div className={`bg-gray-100 rounded-full h-10 w-10 overflow-hidden ${props.className}`}>
            <SampleUser className={`h-10 w-10 grid place-self-center ${props.avatarClassName}`}/>
        </div>
    )
}