import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        events: [],
        eventLoading: false
    }
})

const eventReducer = eventSlice.reducer;
export default eventReducer;