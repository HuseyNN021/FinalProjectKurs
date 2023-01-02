import React from "react";
import Header from "./Header";
import './SignUp.css'

function SignUp() {
    function BtnUp(e) {
        e.preventDefault()
        alert("You are registered")
    }
    function Btnİn(e) {
        e.preventDefault()
        alert("You are logged in")
    }
    return (
        <div className="LinkSign">
             <Header />
            <div className="SignUp_In">
                <form className="SignIN" onSubmit={Btnİn}>
                    <h2>Sign In</h2>
                    <input type="email" name="mail" placeholder="enter mail"></input>
                    <input type="password" name="password" placeholder="enter password"></input>
                    <button>Sign İn</button>
                </form>
                <form className="SignUP" onSubmit={BtnUp}>
                    <h2>Sign UP</h2>
                    <input type="text" name="name" placeholder="enter name"></input>
                    <input type="text" name="surname" placeholder="enter surname"></input>
                    <input type="email" name="mail" placeholder="enter mail"></input>
                    <input type="password" name="password" placeholder="enter password"></input>
                    <input type="password" name="password" placeholder="retype the password"></input>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default SignUp