import React, { useState } from 'react';
import './header.css'
import PhoneHeader from './phone'
import ComputerHeader from './computer'

const Header = ({currentPage, handlePageChange}) => {

    const[menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="headerContainer">
            <div className="logo">
                YL
            </div>
            <div className="nav">
                <div className="compNav">
                    <ComputerHeader currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
                <div className="phoneNav">
                    <div onClick={()=>setMenuOpen(!menuOpen)}>
                        <i className="fi-rr-apps menuIcon"></i>
                    </div>

                    {menuOpen && <PhoneHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen}
                        currentPage={currentPage} handlePageChange={handlePageChange} />}
                </div>
            </div>
        </div>
    )
}
export default Header;