import React from 'react';
import landingImage from './landi.png'
import './landing.css'

const Landing = ()=>{
    return(
        <div className="landingContainer">
            <img className="landingImage" src={landingImage} alt=""/>
            {/* <h1>Yash Lalpotu</h1> */}
        </div>
    )
}
export default Landing