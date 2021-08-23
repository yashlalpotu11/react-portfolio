import React from 'react'
import './skills.css'

const Skills = () =>{
    return (
        <div className="skillsContainer">
            <div id="skills"></div>
            <div className="skillsHeading">
                Skills
            </div>
            <div className="allSkills">
                <div className="skillTypeContainer">
                    <h2>Programming Languages</h2>
                </div>
                <div className="skillNames">
                    <p>C</p>
                    <p>C++</p>
                    <p>Python</p>
                    <p>Java</p>
                </div>

                <div className="skillTypeContainer">
                    <h2>Technologies</h2>
                </div>
                <div className="skillNames">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>Bootstrap</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>React Native</p>
                    <p>Git</p>
                    <p>Material UI</p>
                    <p>Firebase</p>
                </div>

                <div className="skillTypeContainer">
                    <h2>Databases</h2>
                </div>
                <div className="skillNames">
                    <p>Mysql</p>
                    <p>MongoDB</p>
                </div>

                <div className="skillTypeContainer">
                    <h2>Developement Framework</h2>
                </div>
                <div className="skillNames">
                    <p>MERN-STACK</p>
                </div>
            </div>
        </div>
    )
}
export default Skills;