import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Sidenavbar from "../components/SideNavbar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, verifyUser } from "../redux/slice/userSlice";

export default function Navbar(){
    const dispatch = useDispatch()
    const [hamberg, setHamberg] = useState(false)
    const user = useSelector(state=> state.user)

    const handleLogut = ()=>{
        dispatch(logoutUser())
    }

    useEffect(()=>{
        dispatch(verifyUser())
    },[dispatch])
    return (
        <>
            <div className="bg-slate-100 shadow-2xl w-full p-5 text-black flex justify-between items-center px-10 md:px-32">
            <Link to={"/"} className="font-bold">Home</Link>
            <div className="hidden sm:flex items-center gap-2">
                {user && user.isAuthenticated ==true ?
                <>
                    <Link to={"/post-event"} className="font-bold hover:text-blue-500">Add Event</Link>
                    <button onClick={handleLogut} className="font-bold hover:text-red-500 cursor-pointer">Logout</button>
                </>
                :
                <>
                    <Link to={"/signup"} className="font-bold hover:text-blue-500">Signup</Link>
                    <Link to={"/signin"} className="font-bold hover:text-blue-500">Signin</Link>
                </>
                }
            </div>
            <div className="sm:hidden flex items-center">
            {hamberg? 
                <button onClick={()=> setHamberg(!hamberg)} className="cursor-pointer"><RxCross1/></button>
                :<button onClick={()=> setHamberg(!hamberg)} className="cursor-pointer"><FaBarsStaggered/></button>
            }
            </div>
        </div>
         {hamberg && <Sidenavbar/>}
        </>
    )
}