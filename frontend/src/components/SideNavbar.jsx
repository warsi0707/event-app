import { Link } from "react-router";
import SideNavLink from "./SideNavLink";

export default function Sidenavbar(){
    return (
        <div className="min-h-screen w-1/2 bg-slate-300 fixed right-0 sm:hidden z-50 p-5 flex flex-col gap-3 items-center">
           <SideNavLink title={"Home"} links={"/"}/>
           <SideNavLink title={"Add event"} links={"/"}/>
           <SideNavLink title={"Signin"} links={"/"}/>
           <SideNavLink title={"Signup"} links={"/"}/>
           <button className="w-full p-2 px-5 rounded-md hover:bg-red-400 cursor-pointer hover:text-white flex items-start transition-all duration-300">Logout</button>
        </div>
    )
}