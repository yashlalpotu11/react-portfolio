import React from 'react'
import './portfolio.css'
import Project from './components/portfolio'

const vaxin ={
    name : 'VaaXin',
    type : 'Frond-End, Api',
    technology : 'React.js',
    website : 'https://yash-vaccinefinder.netlify.app/',
    github : 'https://github.com/yashlalpotu11/VaaxIn',
    image : 'vaxin'
}
const wunder ={
    name : 'Wunderlist',
    type : 'Frond-End',
    technology : 'React.js',
    website : 'https://yash-wunderlist.netlify.app/',
    github : 'https://github.com/yashlalpotu11/Wunderlist',
    image : 'wunder'
}
const tictac ={
    name : 'TicTacToe',
    type : 'Frond-End',
    technology : 'React.js',
    website : 'https://yash-tictactoe.netlify.app/',
    github : 'https://github.com/yashlalpotu11/tic-tac-toe',
    image : 'tictac'
}
const form ={
    name : 'Form_Validate',
    type : 'Frond-End',
    technology : 'HTML, CSS, JAVASCRIPT',
    website : 'https://yash-valid-form.netlify.app/',
    github : 'https://github.com/yashlalpotu11/form-validation',
    image : 'form'
}
const dashboard ={
    name : 'Dashboard',
    type : 'Frond-End',
    technology : 'HTML, CSS, JAVASCRIPT',
    website : 'https://mysocial-dashboard.netlify.app/',
    github : 'https://github.com/yashlalpotu11/social_dashboard',
    image : 'dashboard'
}
const Port ={
    name : 'Portfolio',
    type : 'Frond-End',
    technology : 'React.js',
    website : '#',
    github : 'https://github.com/yashlalpotu11/react-portfolio',
    image : 'port'
}

const Portfolio = () =>{
    return(
        <div className="portfolioContainer">
            <div id="project"></div>
            <div className="projectsHeading">
                Projects
            </div>

            <div className="container">
            <Project props={tictac} />
                <Project props={vaxin} />
                <Project props={Port} />
                <Project props={wunder} />
                <Project props={form} />
                <Project props={dashboard} />
            </div>
            <div className="contact"></div>
        </div>
    )
}
export default Portfolio;