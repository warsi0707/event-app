import { useState } from "react";
import FormInput from "../components/FormInput";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import SignButton from "../components/SignButton";
import { useDispatch, useSelector } from "react-redux";
import { handleSignUp } from "../redux/slice/userSlice";


export default function Signup(){
    const dispatch = useDispatch()
    const loading = useSelector(state => state.user.logLoading)
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignUpBtn =async()=>{
        await dispatch(handleSignUp({name, email, password})).unwrap()
        navigate("/signin")
    }

    return (
        <div className="min-h-screen w-full p-3 md:w-[900px]  mx-auto flex justify-center items-center">
            <div className="bg-slate-100 shadow-2xl border border-gray-200 -mt-32 w-96  p-4 rounded-md">
                <h1 className="text-xl text-center ">Register </h1>
                <div className="flex flex-col py-10 gap-3">
                    <FormInput values={name} onchange={(e)=> setName(e.target.value)} placeholder={"Full Name"} label={"Full Name"} type={'text'}/>
                    <FormInput values={email} onchange={(e)=> setEmail(e.target.value)} placeholder={"user@gmail.com"} label={"Email"} type={'text'}/>
                     <div className="flex flex-col gap-1" >
                        <label htmlFor="">Password</label>
                        <div className="w-full border flex p-1 rounded-md px-3">
                            <input values={password} onChange={(e)=> setPassword(e.target.value)} type={showPassword? "text": "password"} placeholder="* * * * *" className="w-full outline-none " />
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
                    <SignButton onclick={handleSignUpBtn} title={loading == true? "Loading...": "Create account"}/>
                </div>
            </div>
        </div>
    )
}