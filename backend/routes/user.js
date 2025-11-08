const express = require("express");
const { handleSignup, handleSignin, handleVerify, handleCreateEvent, handleUpdateEvent, handleRemoveEvent } = require("../controllers/user");
const AuthChecker = require("../middleware/AuthChecker");
const userRouter = express.Router()

userRouter.post("/signup", handleSignup)
.post("/signin", handleSignin)
.get("/verify", AuthChecker, handleVerify)
.post("/event", AuthChecker, handleCreateEvent)
.put("/event/:id", AuthChecker, handleUpdateEvent)
.delete("/event/:id", AuthChecker, handleRemoveEvent)

module.exports = userRouter;