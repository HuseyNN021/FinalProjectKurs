import React from "react";
import './Categories.css'
import SebetLogo from "./icon/Sebet";

function Categories() {
    return (
        <div className="categories">
            <div className="categories-1">
                <div className="categories-1-select">
                    <label>Shop  by category</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <p>Coming soon</p>
            </div>
            <div className="categories-2">
                <div className="categories-2-language">
                    <label>English</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="categories-2-money">
                    <label>$USD</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="categories-3">
                    <span>USD$0.00</span>
                    <span>0</span>
                    <span><SebetLogo/></span>
                </div>
            </div>
        </div>
    )
}

export default Categories