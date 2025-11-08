const { PrismaClient } = require("@prisma/client");
const bcrypt = require('bcrypt')
const client = new PrismaClient()
const jwt = require('jsonwebtoken');
const { USER_JWT_SECRET } = require("../config/Config");

const handleSignup = async(req , res)=>{
    const {name, email, password} = req.body;
    try{
        const existingUser =await client.user.findFirst({
            where : {
                email: email
            }
        })
        if(existingUser && existingUser.email == email){
            return res.status(501).json({
                error: "user already exist please login"
            })
        }

        const hashPass = await bcrypt.hash(password, 10)
        const newUser = await client.user.create({
            data: {
                name,
                email,
                password: hashPass
            }
        })
        console.log(newUser)
        return res.json({
            message: "Signup successfull",
        })
    }catch(error){
        res.status(404).json({
            error: error
        })
    }
}
const handleSignin = async(req,res)=>{
    const {email, password} = req.body;
    try{
        const findUser = await client.user.findUnique({
            where: {email: email}
        })
       if(!findUser){
         return res.status(404).json({
            error: "User not found, please login"
        })
       }
        const comparePassword = findUser? await bcrypt.compare(password,findUser.password): false;
        if(comparePassword){
            const token =  jwt.sign({
                user: findUser.id
            }, USER_JWT_SECRET)
            return res.json({
                message: "Signin success",
                token: token,
                user: {
                    name: findUser.name,
                    email: findUser.email,
                    createdAt: findUser.createdAt
                }
            })
        }
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
const handleVerify = async(req, res)=>{
    try{
        const user = await client.user.findUnique({
            where: {
                id: req.user
            }
        })
        return res.json(user)
    }catch(error){
        return res.status(404).json({
            error : error
        })
    }
}
const handleCreateEvent = async(req, res)=>{
    const {title, description,date,location} = req.body;

    try{
        const newEvent =await client.event.create({
            data: {
                title,
                description,
                date,
                location,
                postedById: req.user
            }
        })
        return res.json({
            message: "Event created",
            event: newEvent
        })
    }catch(error){
        return res.status(404).json({
            error : error
        })
    }
}
const handleUpdateEvent = async(req, res)=>{
    const {id} = req.params;
     const {title, description,date,location} = req.body;
    try{
        const updateEvent = await client.event.update({
            where: {id: id},
            data: {
                title, description, date, location
            }
        })
        return res.json({
            message: "Event updated",
            event: updateEvent
        })
    }catch(error){
        return res.status(404).json({
            error : error
        })
    }
}
const handleRemoveEvent = async(req, res)=>{
    const {id} = req.params;
    try{
        const removedEvent = await client.event.delete({
            where: {id: id}
        })
        return res.json({
            message: "Event removed",
            event: removedEvent
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}

module.exports = {
    handleSignup,
    handleSignin,
    handleVerify,
    handleCreateEvent,
    handleUpdateEvent,
    handleRemoveEvent
}