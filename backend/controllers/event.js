const { PrismaClient } = require("@prisma/client")
const client = new PrismaClient()

const handleJoinEvent =async (req, res)=>{
    const {id} = req.params;
    try{
        const findUser = await client.event.findFirst({
            where: {
                userId: req.user
            }
        })
        console.log(findUser)
        if(findUser && findUser.userId === req.user){
            return res.status(404).json({
                error: "Already joined this event or any other"
            })
        }
        const joinEvent = await client.event.update({
            where: {id: id},
            data: {
                userId: req.user
            }
        })
        console.log(joinEvent)
        return res.json({
            message: "Joined event",
            event: joinEvent
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }

}
const handleGetAllEvent =async (req, res)=>{
    try{
        const events = (await client.event.findMany({
            include: {
                postedBy: {
                    select: {
                        email: true,
                        name: true
                    }
                },
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        }))
        return res.json({
            events: events
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
const handleLeaveEvent = async(req,res)=>{
    const {id} = req.params
    try{
        const leaveEvent = await client.event.update({
            where: {
                id: id
            },
            data: {
                user: {
                    disconnect: {id: req.user}
                }
            }
        })
        return res.json({
            message: "You leaved this event",
            event : leaveEvent
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
const getEventDetail = async(req,res)=>{
    const {id} = req.params;
    try{
        const event = await client.event.findUnique({
            where: {
                id: id
            },
            include: {
                postedBy: {
                   select: {
                     name: true,
                    email: true
                   }
                },
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
        if(!event){
            return res.status(404).json({
                error: "Event not found",
                event: {}
            })
        }
        return res.json({
            event: event
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
module.exports = {
    handleJoinEvent,
    handleGetAllEvent,
    handleLeaveEvent,
    getEventDetail
}