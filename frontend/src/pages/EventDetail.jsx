import { useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { getEventDetail } from "../redux/slice/eventSlice";

export default function EventDetail(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const event = useSelector(state => state.event.detailEvent)
    console.log(event)
    console.log(id)
    const handleBack =()=>{
        window.history.back()
    }
    useEffect(()=>{
        dispatch(getEventDetail(id))
    },[dispatch,id])

    return (
        <div className="w-full p-5 space-y-5 lg:w-[900px] min-h-screen  mx-auto">
            <button onClick={handleBack} className="flex items-center gap-1 cursor-pointer">
                <p><IoMdArrowBack/></p>
                <p>Back</p>
            </button>
            <div className="bg-slate-200 w-full flex flex-col gap-2 p-2 rounded-sm">
                <h1 className="text-2xl font-semibold">{event?.title}</h1>
                <p className="text-sm">{event?.description}</p>
                <div className="flex justify-between items-end">
                    <div className="text-sm">
                        <p>Posted by: {event?.postedBy?.name}</p>
                        <p>Location: {event?.location}</p>
                        <p>Event Date: {event?.date}</p>
                    </div>
                    <div className="space-x-2">
                        <Link to={`/update-event/${id}`} className="bg-green-400 cursor-pointer text-xs p-1 md:text-sm md:px-5 rounded-md" >Update Event</Link>
                        <button  className="bg-red-400 cursor-pointer text-xs p-1 md:text-sm md:px-5 rounded-md" >Remove</button>
                    </div>
                </div>
                
            </div>
            <div className="bg-gray-100 p-2 py-4 rounded-md shadow-2xl">
                <div className="flex gap-2">
                    <p>Samir</p>
                    <p>samir@gmail.com</p>
                </div>
                <p>12-12-2025</p>
            </div>
        </div>
    )
}