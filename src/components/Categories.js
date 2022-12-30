import React, { useState } from "react";
import './Categories.css'
import SebetLogo from "./icon/Sebet";

function Categories({search,setSearch}) {
    let [select,setSelect]=useState('')
    function getSelectData(e){
        setSelect(e.target.value)
        setSearch(e.target.value)
    }
    console.log(search);
    console.log(select);
    return (
        <div className="categories">
            <div className="categories-1">
                <div className="categories-1-select">
                    <select onClick={getSelectData}>
                        <option>Shop  by category</option>
                        <option>Fantastick</option>
                        <option>Dram</option>
                        <option>horror</option>
                        <option>Funny</option>
                    </select>
                </div>
                <p>Coming soon</p>
            </div>
            <div className="categories-2">
                <div className="categories-2-language">
                    <select>
                        <option>English</option>
                        <option>Russian</option>
                        <option>Spanish</option>
                    </select>
                </div>
                <div className="categories-2-money">
                    <select >
                        <option>$ USD</option>
                        <option>$ EUR</option>
                        <option>$ AZN</option>
                        <option>$ RUB</option>
                    </select>
                </div>
                <div className="categories-3">
                    <span>USD$0.00</span>
                    <span>0</span>
                    <span><SebetLogo /></span>
                </div>
            </div>
        </div>
    )
}

export default Categories