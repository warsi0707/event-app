export default function PostEvent(){
    return (
         <div className="min-h-screen w-full p-3 lg:w-[900px]  mx-auto flex justify-center md:px-40  items-center">
            <div className="bg-slate-100 shadow-2xl border border-gray-200 -mt-32 w-full p-4 rounded-md">
                <h1 className="text-center">Post Your Event</h1>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Title</label>
                        <input type="text" className="border w-full p-1 rounded-sm" placeholder="Title"/>
                    </div>
                    <div className="flex w-full justify-between gap-3">
                        <div className="flex w-full flex-col gap-2">
                            <label htmlFor="">Location</label>
                            <input type="text" className="border w-full p-1 rounded-sm" placeholder="Title"/>
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <label htmlFor="">Date</label>
                            <input type="date" className="border w-full p-1 rounded-sm" placeholder="Title"/>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label htmlFor="">Description</label>
                        <textarea name="" rows={5} className="border rounded-sm p-2" placeholder="Write something" id=""></textarea>
                    </div>
                    <button className="bg-blue-500 p-1.5 rounded-md text-white cursor-pointer">Post</button>
                </div>
            </div>
        </div>
    )
}