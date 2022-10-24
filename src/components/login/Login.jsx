import React from 'react'
import './login.css'
import Vicinity from '../../assets/vicinity.png'
import {BsFacebook} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
import {FaApple} from 'react-icons/fa'
import {useNavigate, } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();

 const navigateToHome = ()=> {
    navigate('/home');

  }
  return (

    <div className="loginContainer">
            <img src={Vicinity} alt="lolo" className="logoimg"/>
        <div className="login"><h1><strong>Login</strong></h1></div>
           <div className="info1">
               <p>Enter information to your account</p>
           </div>
        <div className="buttons">
              <div className="user">
                <input className= "input1" type = "email" placeholder='Email/Username' required></input>
                <input className="input1" type="password" placeholder="Passcode" required>
                  </input></div>
        </div>
        <div className="trouble">
          <p><strong>Having trouble signing in?</strong>
          </p></div>
        <div className="logout1">
          <button onClick={navigateToHome} className="logout" type='submit'>
           Sign in
            </button></div> 
        <div className="or">
          <p>-- Or sign in with --</p>
          </div>
        <div className="other">
              <div className="options"><button className='socialbutton'><BsGoogle/>  Google</button></div>
              <div className="options"><button className='socialbutton'><FaApple/> Apple</button></div>
              <div className="options"><button className='socialbutton'><BsFacebook/> Facebook</button></div>
        </div>
        <div className="sign"><p>Don't have an account? <strong>Sign up</strong></p></div>
        
    </div>
  )
}

export default Login