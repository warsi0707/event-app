import {BrowserRouter, Routes, Route} from "react-router"
import { lazy } from "react"
import { useSelector } from "react-redux"
import EventDetail from "./pages/EventDetail"
import UpdateEvent from "./pages/UpdateEvent"
const Home = lazy(()=> import("./pages/Home"))
const Navbar = lazy(()=> import("./pages/Navbar"))
const Signin = lazy(()=> import("./pages/Signin"))
const Signup = lazy(()=> import("./pages/Signup"))
const PostEvent = lazy(()=> import("./pages/PostEvent"))

function App() {
  const user = useSelector(state => state.user)
  console.log(user)
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={user?.isAuthenticated ==true ?<Home/>: <Signin/>}/>
        <Route path="/signup" element={user?.isAuthenticated ==true ?<Home/>: <Signup/>}/>
        <Route path="/post-event" element={user?.isAuthenticated ==true ?<PostEvent/>: <Signin/>}/>
        <Route path="/event-detail/:id" element={<EventDetail/>}/>
        <Route path="/update-event/:id" element={<UpdateEvent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
