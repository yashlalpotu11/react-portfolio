import React, { useState } from 'react'
import './body.css'
import Header from './header/index'
import About from './about/index'
import Landing from './landing/index'
import Skills from './skills/index'
import Contact from './contact/index'

const Body = () =>{

    const[currentPage, setCurrentPage] = useState('About');

    const renderPage = ()=>{

        if(currentPage === 'About'){
            return(
                <div className="bodyContainer">
                    <div>
                        <div>
                            <Landing/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <About/>
                        </div>
                    </div>
                </div>
            )
        }

        if(currentPage === 'Skills'){
            return(
                <div className="bodyContainer">
                    <div>
                        <Skills/>
                    </div>
                </div>
            )
        }

        if(currentPage === 'Portfolio'){
            return(
                <div className="bodyContainer">
                    {/* <Portfolio/> */}
                </div>
            )
        }

        if(currentPage === 'Contact'){
            return(
                <div className="bodyContainer">
                    <div>
                        <Contact/>
                    </div>
                </div>
            )
        }
    }

    const handlePageChange = (page) =>setCurrentPage(page);
    return(
        <div>
            <div className="sticky1">
                <div className="cover"></div>
                {/*here passing currentPage from state to function to update it*/ }
                <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
            {/*here we are calling the renderpage which will return component*/}
            <div>
                {renderPage()}
            </div>
        </div>
    )
}
export default Body;