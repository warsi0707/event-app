const express = require('express');
const { handleGetAllEvent, handleJoinEvent, handleLeaveEvent } = require('../controllers/event');
const AuthChecker = require('../middleware/AuthChecker');
const eventRouter = express.Router()

eventRouter.get("/", handleGetAllEvent)
.put("/:id", AuthChecker, handleJoinEvent)
.put("/leave-event/:id",AuthChecker, handleLeaveEvent)

module.exports = eventRouter;