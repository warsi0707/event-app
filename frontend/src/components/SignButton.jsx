import { memo } from "react"

function SignButton(){
    return (
        <button className="bg-blue-600 text-white cursor-pointer w-full p-1 rounded-sm">Signin</button>
    )
}

export default memo(SignButton)