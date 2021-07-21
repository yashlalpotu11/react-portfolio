import React from 'react'
import './phone.css'
import resume from '../../../../files/resume.pdf'

const PhoneHeader = ({ menuOpen, setMenuOpen, currentPage, handlePageChange})=>{
    return(
        <div className="phone">
            <div className="closeIcon" onClick={()=>setMenuOpen(!menuOpen)}>
                <i className="fi-rr-cross-circle"></i>
            </div>

            <div className="menuOptions">
                <div className="mobileOptions">
                    <a href="#about" onClick={()=>handlePageChange('About')} className={currentPage=== 'About' ? 'this' : ''}>
                        <i className="fi-rr-id-badge navIcon"></i> About
                    </a>
                </div>

                <div className="mobileOptions">
                    <a href="#skills" onClick={()=>handlePageChange('Skills')} className={currentPage=== 'Skills' ? 'this' : ''}>
                        <i className="fi-rr-crown navIcon"></i> Skills
                    </a>
                </div>

                <div className="mobileOptions">
                    <a href="#projects" onClick={()=>handlePageChange('Portfolio')} className={currentPage=== 'Portfolio' ? 'this' : ''}>
                        <i className="fi-rr-briefcase  navIcon"></i> Projects
                    </a>
                </div>

                <div className="mobileOptions">
                    <a href="#contact" onClick={()=>handlePageChange('Contact')} className={currentPage=== 'Contact' ? 'this' : ''}>
                        <i className="fi-rr-headset navIcon"></i> Contact
                    </a>
                </div>

                <div className="mobileOptions">
                    <a href={resume} target="_blank" rel="noreferrer">
                        <i className="fi-rr-document navIcon"></i> Resume
                    </a>
                </div>
            </div>
        </div>
    )
}
export default PhoneHeader;