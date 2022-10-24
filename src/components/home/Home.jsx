import React from 'react'
import Events from './Events'
import './home.css'
import LOGO1 from '../../assets/vicinity.png'
import Nav from '../navbar/Nav'
const Home = () => {
  return (
    <div className='header'>
              <div className="imglogo">
              <img src={LOGO1} alt="" className="logoheader" />
              </div>
        <div className='header-items'>
            <form className='searchbar'>
                 <input type="text" name="search" placeholder="Search.."/>
            </form>


           
                <nav className='filters'>
                    <button className="nav-items">Community
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <button className="nav-items">Fun
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <button className="nav-items">Business
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <button className="nav-items">Promotion
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <button className="nav-items">Music
                        <i className="fa fa-caret-down"></i>
                    </button>
                   
                </nav>
        </div>
    <div className='numberevents'>
        <h3>
           16 events near me
        </h3>
    </div>
    
    <Events/>
    <Nav/>
    </div>
  )
}

export default Home