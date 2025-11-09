import { useCallback, useEffect } from "react";
import EventCard from "../components/EventCard";
import {useDispatch, useSelector} from "react-redux"
import { getEvents, joinEvent, leaveEvent, removeEvent } from "../redux/slice/eventSlice";
export default function Home(){
    const dispatch = useDispatch()
    const events = useSelector(state => state.event.events)
    const loading = useSelector(state => state.event.eventLoading)
    console.log(events)

    const handleRemoveEvent =useCallback((id)=>{
        console.log(id)
        dispatch(removeEvent(id))
        dispatch(getEvents())
    },[])
    const handleJoinEvent =useCallback((id)=>{
        dispatch(joinEvent(id))
         dispatch(getEvents())
    },[])
    const handleLeaveEvent =useCallback((id)=>{
        dispatch(leaveEvent(id))
        dispatch(getEvents())
    },[])

    useEffect(()=>{
        dispatch(getEvents())
    },[dispatch])
    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div className="w-full p-5 md:w-[900px] mx-auto">
            <h1 className="text-xl  md:text-3xl font-semibold ">Our All events</h1>
            <div className="w-full min-h-screen flex flex-col gap-5 mx-auto py-10">
                {events && events?.map((eve)=>(
                    <EventCard key={eve.id} event={eve} handleRemoveEvent={()=> handleRemoveEvent(eve.id)} handleJoinEvent={()=> handleJoinEvent(eve.id)} handleLeaveEvent={()=> handleLeaveEvent(eve.id)}/>
                ))}
            </div>
        </div>
    )
}