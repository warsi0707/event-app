import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Backendurl } from "../../utils/Backendurl";

export const handleSignIn = createAsyncThunk('fetch/signin', async({email, password}, {rejectWithValue})=>{
    try{
        const response = await fetch(`${Backendurl}/user/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const result = await response.json()
        console.log(result)
        if(response.status ==200){
            toast.success(result.message)
            return result
        }else{
            toast.error(result.error)
        }
    }catch(error){
        toast.error("Failed")
        return rejectWithValue(error)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token : localStorage.getItem('token') || null,
        user : JSON.parse(localStorage.getItem('user')) || [],
        isAuthenticated: false,
        logLoading: false,
        error : false
    },
    reducers: {
        verifyUser : (state, action)=>{
            const token = localStorage.getItem('token')
            const user = JSON.parse(localStorage.getItem('user'))|| null
            if(token){
                state.isAuthenticated = true,
                state.user = user
            }
        },
        logoutUser : (state, action)=> {
            const token = localStorage.getItem('token')
            if(token){
                localStorage.removeItem('token')
                toast.success("logout")
                state.token = null
                state.user = null
                state.isAuthenticated = false
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(handleSignIn.pending, (state)=>{
            state.logLoading = true
        })
        .addCase(handleSignIn.rejected, (state, action)=>{
            state.logLoading = false
            state.error = true
        })
        .addCase(handleSignIn.fulfilled, (state, action)=>{
            state.token = action.payload.token
            state.isAuthenticated = true
            state.logLoading = false
            state.user = action.payload.user
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem("user", JSON.stringify(action.payload.user))
        })
    }
})

const userReducer = userSlice.reducer;
export const {verifyUser,logoutUser} = userSlice.actions;
export default userReducer;