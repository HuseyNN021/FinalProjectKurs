import React from "react";
import Header from "./Header";
import './Contact.css'

function Contact() {
    return (

        <div className="Contact">
            <Header />
            <div className="ShowContact">
                <div className="ContactImg">
                    <img src="https://avatars.githubusercontent.com/u/114741550?v=4" alt="Huseyn"></img>
                </div>
                <div className="ContactList">
                    <ul>
                        <li><b>About Me:</b><p>I am Huseyn Hasanov. I am 19 years old. I am a FrontEnd Developer/</p></li>
                        <li><b>About WebSite:</b><p>This site is a book site. It is a multi-page site. React is developed in JavaScript</p></li>
                        <li><b>My Email:</b> hhasanov860@gmail.com</li>
                        <li><b>My phone:</b> 077 628 98 18</li>
                        <li><b>My Github:</b><a href="https://github.com/HuseyNN021"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;