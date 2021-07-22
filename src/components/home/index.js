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
                    <a href="https://github.com/yashlalpotu11" target='_blank' rel="noreferrer" className="socialIcon"><SocialIcon network="github" bgColor="#82a2c4" /></a>
                    <a href="https://www.instagram.com/using_namespace__std/" target='_blank' rel="noreferrer" className="socialIcon"><SocialIcon network="instagram" bgColor="#82a2c4" /></a>
                    <a href="https://www.linkedin.com/in/%F0%9D%97%AC%F0%9D%97%AE%F0%9D%98%80%F0%9D%97%B5-%F0%9D%97%9F%F0%9D%97%AE%F0%9D%97%B9%F0%9D%97%BD%F0%9D%97%BC%F0%9D%98%81%F0%9D%98%82-92b4931b4/" target='_blank' rel="noreferrer" className="socialIcon"><SocialIcon network="linkedin" bgColor="#82a2c4" /></a>
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
