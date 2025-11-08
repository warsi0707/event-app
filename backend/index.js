require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/user')
const eventRouter = require('./routes/event')
const app = express()
const cors = require("cors")
const { FRONTEND_URL } = require('./config/Config')

app.use(express.json())

app.use(cors({
    origin: FRONTEND_URL
}))
app.use("/api/v1/user", userRouter)
app.use("/api/v1/event", eventRouter)


const main =()=>{
    app.listen(3000)
    console.log("App listing on port 3000")
}
main()