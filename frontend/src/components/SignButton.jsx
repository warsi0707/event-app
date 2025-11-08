import { memo } from "react"

function SignButton({title}){
    return (
        <button className="bg-blue-600 text-white cursor-pointer w-full p-1 rounded-sm">{title}</button>
    )
}

export default memo(SignButton)