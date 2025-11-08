import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../slice/userSlice";
import eventReducer from "../slice/eventSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        event: eventReducer
    }
})

export default store;