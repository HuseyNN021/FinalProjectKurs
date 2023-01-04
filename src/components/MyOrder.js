import React from "react";
import Header from "./Header";
import './MyOrder.css'

function MyOrder(){

    return(
        <div className="MyOrder">
            <Header/>
            <h1>My Order</h1>
            <p>the total price of your orders : USD $0.00 </p>
        </div>
    )
}
export default MyOrder;