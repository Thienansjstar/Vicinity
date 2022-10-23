import React from 'react'
import './events.css'
import IMG1 from '../../assets/1.jpg'
import IMG2 from '../../assets/2.jpg'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.jpg'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.jpg'
import IMG7 from '../../assets/7.jpg'
import IMG8 from '../../assets/8.jpg'
import IMG9 from '../../assets/9.jpg'
import IMG10 from '../../assets/10.jpg'

const Events = () => {
  return (
   
    <div className='Eventlisting_container'>
       <div className='container2'>
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG1} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Mon, Oct 24, 2022</h3>
            <h1 className="eventname">Swim Field Day</h1>
            <h3 className='location'>UW IMA Building</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG2} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Tuesday, Oct 25, 2022</h3>
            <h1 className="eventname">Study Session</h1>
            <h3 className='location'>Cafe Canuc</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG3} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Thursday, Oct 27, 2022</h3>
            <h1 className="eventname">International District Hangout</h1>
            <h3 className='location'>International District</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG4} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Friday, October 28, 2022</h3>
            <h1 className="eventname">Dog Park Hang Out</h1>
            <h3 className='location'>Dog Wood Play Park</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG5} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Saturday, Oct 29, 2022</h3>
            <h1 className="eventname">Boba Date!</h1>
            <h3 className='location'>Don't Yell At Me</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG6} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Monday, November 1, 2022</h3>
            <h1 className="eventname">Foster School of Business Networking Event</h1>
            <h3 className='location'>Paccar Hall</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG7} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Tuesday, November 2</h3>
            <h1 className="eventname">Lexus Car Meet</h1>
            <h3 className='location'>Share Tea Tukwila</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG8} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Tuesday, November 2, 2022</h3>
            <h1 className="eventname">McCarty Hall Game Night</h1>
            <h3 className='location'>McCarty Hall</h3></div>
        </div>   
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG9} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Thursday, November 3, 2022</h3>
            <h1 className="eventname">Suzallo Library Tour</h1>
            <h3 className='location'>Suzallo Library</h3></div>
        </div>        
        <div className="Eventlisting">
           <div className='image'><img className="img" src={IMG10} alt='e'/></div> 
            <div className='items'>
            <h3 className="date">Friday, November 4, 2022</h3>
            <h1 className="eventname">Laufey Concert</h1>
            <h3 className='location'>Barboza Seattle</h3></div>
        </div>             
        
     </div> 
    </div>
  )
}

export default Events