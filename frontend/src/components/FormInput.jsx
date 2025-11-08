import { memo } from "react"

function FormInput({type,label, placeholder, values, onchange}){
    return(
         <div className="flex flex-col gap-1" >
            <label htmlFor="">{label}</label>
            <input value={values} onChange={onchange} type={type} placeholder={placeholder} className="border p-1 rounded-sm px-3" />
        </div>
    )
}

export default memo(FormInput)