import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Backendurl } from "../../utils/Backendurl";
import {toast} from "react-hot-toast"


export const getEvents = createAsyncThunk('fetch/events', async(_,{rejectWithValue})=>{
    try{
        const response = await fetch(`${Backendurl}/event`)
        const result = await response.json()
        if(response.status ==200){
            return result
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const postEvent = createAsyncThunk("fetch/postEvent", async({title, description, date, location}, {rejectWithValue})=>{
    try{
        const response = await fetch(`${Backendurl}/user/event`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                token: localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, date, location})
        })
        const result = await response.json()
        if(response.status == 200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const removeEvent = createAsyncThunk("fetch/removeEvent", async(id,{rejectWithValue})=>{
    console.log("fetch id: ", id)
    try{
        const response = await fetch(`${Backendurl}/user/event/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                token: localStorage.getItem("token")
            }
        })
        const result = await response.json()
        if(response.status ==200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
        }
    }catch(error){
        return rejectWithValue(error)
    }
})
export const joinEvent = createAsyncThunk("fetch/joinEvent", async(id, {rejectWithValue})=>{
    try{
        const response = await fetch(`${Backendurl}/event/${id}`, {
            method: 'PUT',
            headers: {
                // 'Content-Type': "application/json",
                token: localStorage.getItem('token')
            },
        })
        const result = await response.json()
        console.log(result)
        if(response.status ==200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result.error)
        }
    }catch(error){
        toast.error("Failed")
        return rejectWithValue(error)
    }
})
export const leaveEvent = createAsyncThunk("fetch/leaveEvent", async(id, {rejectWithValue})=>{
    try{
        const response = await fetch(`${Backendurl}/event/leave-event/${id}`, {
            method: 'PUT',
            headers: {
                // 'Content-Type': "application/json",
                token: localStorage.getItem('token')
            },
        })
        const result = await response.json()
        console.log(result)
        if(response.status ==200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result.error)
        }
    }catch(error){
        toast.error("Failed")
        return rejectWithValue(error)
    }
})
export const getEventDetail = createAsyncThunk("fetch/getDetailEvent", async(id, {rejectWithValue})=>{
    try{
        const response = await fetch(`${Backendurl}/event/${id}`, {
            method: 'GET',
            headers: {
                token: localStorage.getItem('token')
            },
        })
        const result = await response.json()
        console.log(result)
        if(response.status ==200){
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result.error)
        }
    }catch(error){
        toast.error("Failed")
        return rejectWithValue(error)
    }
})
export const updateEvent = createAsyncThunk("fetc/updateEvent", async({id,title, description, date, location}, {rejectWithValue})=>{
     try{
        const response = await fetch(`${Backendurl}/user/event/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                token: localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, date, location})
        })
        const result = await response.json()
        console.log(result)
        if(response.status ==200){
            return result
        }else{
            toast.error(result.error)
            return rejectWithValue(result.error)
        }
    }catch(error){
        toast.error("Failed")
        return rejectWithValue(error)
    }
})

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: [],
        eventLoading: false,
        error: false,
        detailLoading : false,
        detailEvent:  {}
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getEvents.pending, (state)=>{
            state.eventLoading = true
        })
        .addCase(getEvents.rejected, (state)=>{
            state.eventLoading = false
            state.error = false
        })
        .addCase(getEvents.fulfilled, (state, action)=>{
            console.log(action.payload)
            state.eventLoading = false
            state.error = false
            state.events = action.payload.events
        })
        .addCase(postEvent.pending, (state)=>{
            state.eventLoading = true
        })
        .addCase(postEvent.rejected, (state, action)=>{
            state.eventLoading = false
            state.error = true
        })
        .addCase(postEvent.fulfilled, (state, action)=>{
            state.eventLoading = false
            state.error = false
            if(!Array.isArray){
                state.events = []
            }
            state.events.push(action.payload.event)
        })
        .addCase(removeEvent.pending, (state)=>{
            state.eventLoading = true
        })
        .addCase(removeEvent.rejected, (state,action)=>{
            state.eventLoading = false
            state.error = false
        })
        .addCase(removeEvent.fulfilled, (state, action)=>{
            state.eventLoading = false
            state.error = false
            state.events = state.events.filter((event)=> event.id !== action.payload.event.id)
        })
        // .addCase(joinEvent.pending, (state)=> {
        //     state.eventLoading = true
        // })
        .addCase(joinEvent.rejected, (state,action)=>{
            console.log(action.payload)
            // state.eventLoading = false,
            state.error = true
        })
        .addCase(joinEvent.fulfilled, (state, action)=>{
            console.log(action.payload)
            // state.eventLoading = false
        })
        .addCase(leaveEvent.rejected, (state)=> {
            state.error = true
        })
        .addCase(leaveEvent.fulfilled, (state, action)=>{
            state.error = false
            console.log(action.payload)
        })
        .addCase(getEventDetail.pending, (state) =>{
            state.eventLoading = true
        })
        .addCase(getEventDetail.rejected, (state)=>{
            state.error = true
        })
        .addCase(getEventDetail.fulfilled, (state, action)=>{
            state.eventLoading = false
            state.error = false
            state.detailEvent = action.payload.event
        })
        .addCase(updateEvent.pending, (state) =>{
            state.eventLoading = true
        })
        .addCase(updateEvent.rejected, (state)=>{
            state.error = true
        })
        .addCase(updateEvent.fulfilled, (state, action)=>{
            state.eventLoading = false
            state.error = false
            console.log(action.payload)
        })
    }
})

const eventReducer = eventSlice.reducer;
export default eventReducer;