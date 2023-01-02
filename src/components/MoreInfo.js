import React from "react";
import './MoreInfo.css'
import { useLocation } from "react-router-dom";

function MoreInfo() {
    const location = useLocation()
    const data1 = location.state;

    return (
        <div className="MoreInfo">
            {
                data1.map((item, key) => {
                    return (
                        <h2 key={key}>{item.volumeInfo.title}</h2>
                    )
                })
            }
        </div>
    )
}
export default MoreInfo