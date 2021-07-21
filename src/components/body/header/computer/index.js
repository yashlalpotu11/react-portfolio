import React from 'react'
import './computer.css'
import resume from '../../../../files/resume.pdf'

const ComputerHeader = ({currentPage, handlePageChange}) =>{
    return(
        <div className="computer">
            <div className="navOptions">
                <a href="#about" onClick={()=>handlePageChange('About')} className={currentPage=== 'About' ? 'this' : ''}>
                    <i className="fi-rr-id-badge navIcon"></i> About
                </a>
            </div>

            <div className="navOptions">
                <a href="#skills" onClick={()=>handlePageChange('Skills')} className={currentPage=== 'Skills' ? 'this' : ''}>
                    <i className="fi-rr-crown navIcon"></i> Skills
                </a>
            </div>

            <div className="navOptions">
                <a href="#projects" onClick={()=>handlePageChange('Portfolio')} className={currentPage=== 'Portfolio' ? 'this' : ''}>
                    <i className="fi-rr-briefcase  navIcon"></i> Projects
                </a>
            </div>

            <div className="navOptions">
                <a href="#contact" onClick={()=>handlePageChange('Contact')} className={currentPage=== 'Contact' ? 'this' : ''}>
                    <i className="fi-rr-headset navIcon"></i> Contact
                </a>
            </div>

            <div className="navOptions">
                <a href={resume} target="_blank" rel="noreferrer">
                    <i className="fi-rr-document navIcon"></i> Resume
                </a>
            </div>
        </div>
    )
}
export default ComputerHeader;
