import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './navbar.css'


const Nav = () => {
  return (
    
         <nav className='nav__container'>
           <NavLink className='link' to="/home"><AiOutlineHome/></NavLink>
           <NavLink className='link' to="/map"><FiMapPin/></NavLink>
           <NavLink className='link' to="/create"><AiOutlinePlusCircle/></NavLink>
           <NavLink className='link' to="/profile"><CgProfile/></NavLink>
        </nav>
   
  )
}

export default Nav