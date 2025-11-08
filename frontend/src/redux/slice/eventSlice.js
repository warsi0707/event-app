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
        console.log(result)
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

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: [],
        eventLoading: false,
        error: false
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
    }
})

const eventReducer = eventSlice.reducer;
export default eventReducer;