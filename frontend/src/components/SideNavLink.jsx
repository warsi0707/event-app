import { memo } from "react"
import { Link } from "react-router"

function SideNavLink({title, links}){
    return (
        <Link to={links} className="w-full p-2 px-5 rounded-md hover:bg-black hover:text-white transition-all duration-300">{title}</Link>
    )
}
export default memo(SideNavLink)