import { useEffect } from "react";
import EventCard from "../components/EventCard";
import {useDispatch, useSelector} from "react-redux"
import { getEvents } from "../redux/slice/eventSlice";
export default function Home(){
    const dispatch = useDispatch()
    const events = useSelector(state => state.event.events)
    const loading = useSelector(state => state.event.eventLoading)
    console.log(loading)
    console.log(events)

    useEffect(()=>{
        dispatch(getEvents())
    },[])
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
                {events.map((eve)=>(
                    <EventCard event={eve}/>
                ))}
            </div>
        </div>
    )
}