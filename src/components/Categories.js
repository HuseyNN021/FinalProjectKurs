import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Categories.css'
import SebetLogo from "./icon/Sebet";

function Categories({ search, setSearch, qiymet, setQiymet }) {
    let [select, setSelect] = useState('')
    function getSelectData(e) {
        setSelect(e.target.value.Whis)
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
                    <select onClick={getSelectData}>
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
                    <span>USD ${qiymet}.00 </span>
                    <Link to='/MyOrder' >
                        <span><SebetLogo /></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories