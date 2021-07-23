import React, { useState } from 'react'
import './contact.css'

const Contact = ()=>{

    const[isValid, setIsValid] = useState(false);
    const[message, setMessage] = useState('');

    // const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

    const handleSubmit = () =>{
        alert('Form is currently out of service, please contact me via phone, email or social media :)')
        document.getElementById("form").reset();
        setIsValid(false);
        setMessage("");
    }
    return(
        <div className="contactContainer">
            <div id="contact"></div>
            <div className="contactHeading">
                Contact Me
            </div>
            <div className="contactPara">
                <p>Contact me via Phone or Email..</p>
                <div className="contactOptions">
                    <p>Phone : 9028920820</p>
                    <p>Email : <a href="mailto:yashrlalpotu30@gmail.com">yashrlalpotu30@gmail.com</a></p>
                </div>
                <p>Do you wanna say something ?</p>
            </div>
            <div className="formContainer">
                <div className={`message ${isValid ? 'success messagePos' : 'Error messagePos'}`}>
                    {message}
                </div>
                <form id="form" className="topBefore" onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder="NAME" required />
                    <input type="email" id="email" placeholder="E-MAIL" required />
                    <textarea type="text" id="message" placeholder="MESSAGE - (form is currently out of service, please contact me via phone, email or social media)" required ></textarea>
                    <input type="submit" id="submit" value="Send"/>
                </form>
            </div>
        </div>
    )
}
export default Contact;