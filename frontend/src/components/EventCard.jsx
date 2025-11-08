import { memo } from "react"
import {Link} from 'react-router'
import { FaExternalLinkAlt } from "react-icons/fa";
import { useSelector } from "react-redux";


function EventCard({event,handleRemoveEvent}){
    const user = useSelector(state => state.user.user)


    return (
        <div className="w-full bg-slate-100 shadow-2xl border border-gray-200 flex flex-col gap-3 rounded-md p-3">
            <div className="flex justify-between pr-5">
                <div className="flex gap-2 items-center">
                    <p className="md:text-2xl font-semibold">{event?.title}</p>
                    <p className="text-xs italic">by @{event?.postedBy?.name}</p>
                </div>
                <Link to={"#"}><FaExternalLinkAlt/></Link>
            </div>
            <p className="text-xs md:text-sm">{event?.description}</p>
            <div className="flex justify-between items-center">
                <div className="flex flex-col md:flex-row md:items-center text-sm gap-2">
                    <p>{event?.location}</p>
                    <p className="text-xs">{event?.date}</p>
                </div>
                <div className="flex gap-2 justify-end">
                    { event?.postedBy?.email === user?.email ?
                    <>
                        <button className="bg-green-400 cursor-pointer text-xs p-1 md:text-sm md:px-5 rounded-md" >Update Event</button>
                        <button onClick={handleRemoveEvent} className="bg-red-400 cursor-pointer text-xs p-1 md:text-sm md:px-5 rounded-md" >Remove</button>
                    </>:
                    <button className="bg-green-400 cursor-pointer text-xs p-1 md:text-sm md:px-5 rounded-md" >Join</button>}
                </div>
            </div>
        </div>
    )
}
export default memo(EventCard)