import React from "react";
import './Input.css'

function Input() {
    return (
        <div className="search">
            <h1>BookSpace</h1>
            <div className="search_book">
                <input type='text' />
                <button className="search_button">Search</button>
                <button className="advenced_button">Advanced Search</button>
            </div>
        </div>
    )
}
export default Input