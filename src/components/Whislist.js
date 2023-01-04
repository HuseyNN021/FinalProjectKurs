import React, { useState } from "react";
import Header from "./Header";
import './Whislist.css'
function Whislist() {
    let [wish, setWish] = useState('')
    let [wish1, setWish1] = useState([])
    // function getWhish2(){
    //    setWish1(wish);
    // }
    function change(e) {
        setWish(e.target.value)
        console.log(e.target.value);
    }
    function getWish() {
        setWish1([wish])
        console.log(wish1);
    }


    return (
        <div className="Whislist">
            <Header />
            <h1>Whislist</h1>
            <label>Enter the title of the book you want to read: </label>
            <input type='text' name='whis' onChange={change}></input>
            <button onClick={getWish}>Note</button>
            <div className="whislist22">
                {
                    wish1.map((item) => {
                        return (
                            <ul>
                                <li>{item}</li>
                            </ul>
                        )
                    })


                }
            </div>

        </div>
    )
}
export default Whislist;