import { useState } from "react";
import FormInput from "../components/FormInput";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import SignButton from "../components/SignButton";


export default function Signup(){
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="min-h-screen w-full p-3 md:w-[900px]  mx-auto flex justify-center items-center">
            <div className="bg-slate-100 shadow-2xl border border-gray-200 -mt-32 w-96  p-4 rounded-md">
                <h1 className="text-xl text-center ">Register </h1>
                <div className="flex flex-col py-10 gap-3">
                    <FormInput placeholder={"Full Name"} label={"Full Name"} type={'text'}/>
                    <FormInput placeholder={"user@gmail.com"} label={"Email"} type={'text'}/>
                     <div className="flex flex-col gap-1" >
                        <label htmlFor="">Password</label>
                        <div className="w-full border flex p-1 rounded-md px-3">
                            <input type={showPassword? "text": "password"} placeholder="* * * * *" className="w-full outline-none " />
                            {showPassword?
                            <button onClick={()=> setShowPassword(!showPassword)} className="cursor-pointer"><FaRegEyeSlash/></button>:
                            <button onClick={()=> setShowPassword(!showPassword)} className="cursor-pointer"><FaRegEye/></button>
                            }
                        </div>
                    </div>
                    <div className="flex items-center text-xs md:text-sm">
                        <p>Haven't account ?</p>
                        <Link to={"/signup"} className="underline hover:text-blue-800">Register</Link>
                    </div>
                    <SignButton title={"Create account"}/>
                </div>
            </div>
        </div>
    )
}