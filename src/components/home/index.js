import React from 'react'
import './home.css'
import Footer from '../footer/index'
import Body from '../body/index'
import AnimatedCursor from 'react-animated-cursor'
import {SocialIcon} from 'react-social-icons'
// import {SpacingEffect} from 'react-background-animation'


const Home = () =>{
    return(
        <div className="homeContainer">
            <div className="cursor">
                <AnimatedCursor
                    innerSize={16}
                    outerSize={12}
                    color='166,208,70'
                    outerAlpha={0.8}
                    innerScale={1}
                    outerScale={5}
                />
            </div>
            <div className="sticky-container">
                <div className="sticky">
                    <a href="http://" target='_blank' rel="noreferrer" className="socialIcon"><SocialIcon network="github" bgColor="#82a2c4" /></a>
                    <a href="http://" target='_blank' rel="noreferrer" className="socialIcon"><SocialIcon network="instagram" bgColor="#82a2c4" /></a>
                    <a href="http://" target='_blank' rel="noreferrer" className="socialIcon"><SocialIcon network="linkedin" bgColor="#82a2c4" /></a>
                </div>
            </div>
            <div className="move">
                {/* <SpacingEffect/> */}
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Home;
