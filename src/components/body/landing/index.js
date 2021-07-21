import React from 'react';
import landingImage from './landi.png'
import './landing.css'

const Landing = ()=>{
    return(
        <div className="landingContainer">
            <img className="landingImage" src={landingImage} alt=""/>
        </div>
    )
}
export default Landing