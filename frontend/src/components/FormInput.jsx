import { memo } from "react"

function FormInput({type }){
    return(
         <div className="flex flex-col gap-1" >
            <label htmlFor="">Email</label>
            <input type="text" placeholder="email" className="border p-1 rounded-sm px-3" />
        </div>
    )
}

export default memo(FormInput)