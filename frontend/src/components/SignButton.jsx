import { memo } from "react"

function SignButton({title, onclick}){
    return (
        <button onClick={onclick} className="bg-blue-600 text-white cursor-pointer w-full p-1 rounded-sm">{title}</button>
    )
}

export default memo(SignButton)