import React from "react";
import './MoreInfo.css'
import { useLocation } from "react-router-dom";
import Header from "./Header";

function MoreInfo() {
    const location = useLocation()
    const data1 = location.state;

    return (

        <div className="MoreInfo">
            <Header/>
            {
                data1.map((item, key) => {
                    return (
                        <div className="MoreInfo2">
                            {/* <div className="MoreInfo2"> */}
                            <h2 key={key}>{item.volumeInfo.title}</h2>
                            <div className="MoreInfo_Img">
                                <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title}></img>
                                <div className="MoreInfoDescription">
                                    <p><b>Authors: </b>{item.volumeInfo.authors}</p>
                                    <p><b>Categories: </b>{item.volumeInfo.categories}</p>
                                    <p className="description"><b>Description: </b>{item.volumeInfo.description}</p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MoreInfo



