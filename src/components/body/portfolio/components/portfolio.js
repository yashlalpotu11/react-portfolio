import React from 'react';
import dashboard from '../images/dashboard.png'
import form from '../images/form.png'
import port from '../images/portfolio.png'
import tictac from '../images/tic.png'
import vaxin from '../images/vaxin.png'
import wunder from '../images/wunderlist.png'

const Project = (props) =>{

    const renderImg = ()=>{
        if(props.props.image === "dashboard"){
            return(
                <img className="img" src={dashboard} alt="yash"/>
            )
        }

        if(props.props.image === "form"){
            return(
                <img className="img" src={form} alt=""/>
            )
        }

        if(props.props.image === "port"){
            return(
                <img className="img" src={port} alt=""/>
            )
        }

        if(props.props.image === "tictac"){
            return(
                <img className="img" src={tictac} alt=""/>
            )
        }

        if(props.props.image === "vaxin"){
            return(
                <img className="img" src={vaxin} alt=""/>
            )
        }

        if(props.props.image === "wunder"){
            return(
                <img className="img" src={wunder} alt=""/>
            )
        }
    }

    const renderWebsites = ()=>{
        if(props.props.website !== ''){
            return(
                <div className="linkContainer">
                    <a href={props.props.github} target="_blank" rel="noreferrer" className="projGit">Github</a>
                    <a href={props.props.website} target="_blank" rel="noreferrer" className="projGit">Website</a>
                </div>
            )
        }
        else{
            return(
                <div>
                    <a href={props.props.github} target="_blank" rel="noreferrer" className="projGit">Github</a>
                </div>
            )
        }
    }

    return (
        <div className="projContainer">
            <div className="projInfoContainer">
                <h2>{props.props.name}</h2>
                <p className="projCat">{props.props.type}</p>
                <p className="projSpec"><span>Technology :</span><br/><br/></p>
                {renderWebsites()}
            </div>
            {renderImg()}
        </div>
    )
}
export default Project;