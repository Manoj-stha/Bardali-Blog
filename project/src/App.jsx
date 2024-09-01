import Navbar from "./components/global/Navbar"
import {Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import User from "./components/pages/User"
import Blog from "./components/pages/Blog"
import Login from "./components/form/LogIn"
import Register from "./components/form/Register"
import LOGO from './assets/logo.png'

function App() {

  return (

    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/blog" element={<Blog/>}/> 
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
