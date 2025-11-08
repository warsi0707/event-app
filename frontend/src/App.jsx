import {BrowserRouter, Routes, Route} from "react-router"
import { lazy } from "react"
const Home = lazy(()=> import("./pages/Home"))
const Navbar = lazy(()=> import("./pages/Navbar"))
const Signin = lazy(()=> import("./pages/Signin"))
const Signup = lazy(()=> import("./pages/Signup"))
const PostEvent = lazy(()=> import("./pages/PostEvent"))

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/post-event" element={<PostEvent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
