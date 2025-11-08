import { useState } from "react"
import {useDispatch} from "react-redux"
import { postEvent } from "../redux/slice/eventSlice"
import { useNavigate } from "react-router"


export default function PostEvent(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")

    const handlePostEvent =async()=>{
        await dispatch(postEvent({title, description, date, location})).unwrap()
        navigate("/")
    }

    return (
         <div className="min-h-screen w-full p-3 lg:w-[900px]  mx-auto flex justify-center md:px-40  items-center">
            <div className="bg-slate-100 shadow-2xl border border-gray-200 -mt-32 w-full p-4 rounded-md">
                <h1 className="text-center">Post Your Event</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Title</label>
                        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className="border w-full p-1 rounded-sm" placeholder="Title"/>
                    </div>
                    <div className="flex w-full justify-between gap-3">
                        <div className="flex w-full flex-col gap-2">
                            <label htmlFor="">Location</label>
                            <input value={location} onChange={(e)=> setLocation(e.target.value)} type="text" className="border w-full p-1 rounded-sm" placeholder="Title"/>
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <label htmlFor="">Date</label>
                            <input value={date} onChange={(e)=> setDate(e.target.value)} type="date" className="border w-full p-1 rounded-sm" placeholder="Title"/>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label htmlFor="">Description</label>
                        <textarea value={description} onChange={(e)=> setDescription(e.target.value)} name="" rows={5} className="border rounded-sm p-2" placeholder="Write something" id=""></textarea>
                    </div>
                    <button onClick={handlePostEvent} className="bg-blue-500 p-1.5 rounded-md text-white cursor-pointer">Post</button>
                </div>
            </div>
        </div>
    )
}