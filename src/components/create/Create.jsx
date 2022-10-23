import React from 'react'
import './create.css'
import LOGO1 from '../../assets/vicinity.png'
import Nav from '../navbar/Nav'
const Create = () => {
  return (
    <div>
        
    <form actions="" className='forms'>
        <div className="vicinity">
            <img src={LOGO1} alt="1"/>
        </div>
           
            <input type="date" id="start" name="trip-start"
                value="2022-10-23"
                min="2018-01-01" max="2030-12-31" required/>
          
            <input className='input' placeholder='Event Title' required/>
            <textarea className='textarea' rows='4' placeholder='Description' required/>
            
            <input type="file" id="myFile" name="File Upload" required/>
        <button type="Submit">Post</button>
    </form>

    
    <Nav/>
    </div>
  )
}

export default Create