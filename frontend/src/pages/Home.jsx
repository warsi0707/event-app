import EventCard from "../components/EventCard";

export default function Home(){
    return (
        <div className="w-full p-5 md:w-[900px] mx-auto">
            <h1 className="text-3xl font-semibold ">Our All events</h1>
            <div className="w-full min-h-screen flex flex-col gap-5 mx-auto py-10">
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
        </div>
    )
}