import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Backendurl } from "../../utils/Backendurl";

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
    }
})

const eventReducer = eventSlice.reducer;
export default eventReducer;