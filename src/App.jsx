import React from "react"
import Home from "./components/home/Home"
import { Route, Routes} from "react-router-dom"
import Nav from "./components/navbar/Nav"
import Map from "./components/map/Map"
import Profile from "./components/profile/Profile"
import Login from "./components/login/Login"
import Create from "./components/create/Create"
const app = () => {
  return (
    <>
    <div className="navdissapear"> 
      <Nav/>
    </div>
    
    <Routes>
        <Route path='/map' element={<Map/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
    </Routes>
    </>
  );
}

export default app;
