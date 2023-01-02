import React from "react";
import Header from "./Header";
import './Whislist.css'
function Whislist(){
    function getWhish(e){
        console.log(e.target.Whis.value);
    }
    return(
        <div className="Whislist">
            {/* <label>Enter the title of the book you want to read: </label>
            <input type='text' name='Whis' ></input>
            <button onClick={(e)=>{console.log( e.target.Whis.value)}}>Note</button> */}
            <Header/>
            <h1>Whislist</h1>
        </div>
    )
}
export default Whislist;