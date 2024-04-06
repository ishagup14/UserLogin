import React from 'react'
import pic from "../images/welcomehome.png";
import "./Welcome.css";
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
     <div className="welcome__Imageblock">
        <img className="Welcome__img" src={pic} alt="work from home"/>
     </div>
     <div className='welcome__banner'>
        <span>Discover Your</span>
        <span>Dream Job here</span>
     </div>
     <div className='welcome__info'>
        <span>Explore all the existing job roles based on your</span>
        <span>interest and study major</span>
     </div>
     <div className='welcome__btn'>
        <button className='welcome__solo_btn1'><Link to="/login" style={{textDecoration:"none" ,color:"#ffffff"}}>Login</Link></button>
        <button className='welcome__solo_btn2'><Link to="/createaccount" style={{textDecoration:"none" ,color:"#000000"}}>Register</Link></button>
     </div>
    </div>
  )
}

export default Welcome