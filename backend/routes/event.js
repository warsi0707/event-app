const express = require('express');
const { handleGetAllEvent, handleJoinEvent, handleLeaveEvent, getEventDetail } = require('../controllers/event');
const AuthChecker = require('../middleware/AuthChecker');
const eventRouter = express.Router()

eventRouter.get("/", handleGetAllEvent)
.put("/:id", AuthChecker, handleJoinEvent)
.put("/leave-event/:id",AuthChecker, handleLeaveEvent)
.get("/:id", getEventDetail)

module.exports = eventRouter;