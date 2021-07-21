import React from 'react'
import './about.css'
import mypic from './me.jpg'
import resume from '../../../files/resume.pdf'

const About = () =>{
    return(
        <div className="aboutContainer">
            <div id="about"></div>
            <div className="aboutHeading">
                About
            </div>
            <div className="aboutContentContainer">
                <div className="aboutPara">
                Hey there, I'm Yash Lalpotu from Nanded. Currently am persuing my B.Tech(Production Engineering) 
                from Shri Guru Gobind Singhji Institute Of Engineering And Technology, Nanded.

                I love solving problems creatively. Hard-work, resilience, and consistency are some of my strong skills. 
                My analytical skills help me see the world from a different angle. I love to figure out how things work, 
                building them myself gives me immense joy.

                Happy Coding 😃

                <div className="btnContainer">
                    <a className="waterBox" href={resume} target="_blank" rel="noreferrer">
                        <span className="waterText">Resume</span>
                        <div className="water"></div>
                    </a>
                </div>
                </div>
                <div className="picContainer">
                    <img className="aboutPic" src={mypic} alt="yash"/>
                </div>
            </div>
        </div>
    )
}
export default About;