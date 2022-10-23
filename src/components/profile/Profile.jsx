import React from 'react'
import './profile.css'
import Headshot from '../../assets/Ellipse 2.jpg'
import {useNavigate} from 'react-router-dom'
import Nav from '../navbar/Nav'
const Profile = () => {
const navigate = useNavigate();
const goHome = () => {
    navigate('/')
}
    return(
        <div>
        <div className="profileContainer">
            <div className="imgprofile">
                <img src={Headshot} alt="Headshot" className="headshot" />
            </div>
         
            <div className="name1"><h3>Federico Lanzilotta</h3></div>
            <div className="email1"><p>info@federicolanzilotta.com</p></div>  
            <div className="settings1"><h3><strong>Settings</strong></h3></div>
            <div className="primary1">
                <button className="info3"> Primary City</button>
                <button className="info3"> Copy Event to Calendar</button>
                <button className="info3"> Events</button>
                <button className="info3"> Manage Log In Options</button>
                <button className="info3"> Account Settings</button>
            </div>

            <div className="logout1"><button onClick={goHome} className="logout"><h2><strong>Logout</strong></h2></button></div>
         
        </div>
        
        <Nav/>
    </div>
    )
}

export default Profile