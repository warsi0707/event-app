require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/user')
const eventRouter = require('./routes/event')
const app = express()

app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/event", eventRouter)


const main =()=>{
    app.listen(3000)
    console.log("App listing on port 3000")
}
main()