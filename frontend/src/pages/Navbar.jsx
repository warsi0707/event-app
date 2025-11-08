import { useState } from "react";
import { Link } from "react-router";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
export default function Navbar(){
    const [hamberg, setHamberg] = useState(false)
    return (
        <div className="bg-slate-100 shadow-2xl w-full p-5 text-black flex justify-between items-center px-10 md:px-32">
            <Link to={"/"} className="font-bold">Home</Link>
            <div className="hidden sm:flex items-center gap-2">
                <Link to={"/"} className="font-bold hover:text-blue-500">Signup</Link>
                <Link to={"/"} className="font-bold hover:text-blue-500">Signin</Link>
                <Link to={"/"} className="font-bold hover:text-blue-500">Add Event</Link>
                <button className="font-bold hover:text-red-500 cursor-pointer">Logout</button>
            </div>
            <div className="sm:hidden flex items-center">
            {hamberg? 
                <button onClick={()=> setHamberg(!hamberg)} className="cursor-pointer"><RxCross1/></button>
                :<button onClick={()=> setHamberg(!hamberg)} className="cursor-pointer"><FaBarsStaggered/></button>
            }
            </div>
        </div>
    )
}