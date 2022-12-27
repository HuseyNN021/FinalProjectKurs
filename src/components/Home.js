import React, { useState } from "react";
import Aside from "./Aside";
import Categories from "./Categories";
import Header from "./Header";
import Input from "./Input";
import './Home.css'
import Main1 from "./Main1";
import Sign from "./Sign";
import Example from './BestSelling'
import ListBook from './ListBook'
// import Project from "./showBook";

function Home() {
    let [listBook,setListBook]=useState([])
    console.log(listBook);
    return (
        <>
            <Header />
            <Input listBook={listBook} setListBook={setListBook}/>
            <Categories />
            <div className="main">
                <Aside />
                <div className="main1">
                    {/* <div className="main2">
                        <Main1 />
                        <Sign />
                    </div> */}
                    <Example />
                </div>
                <ListBook listBook={listBook} setListBook={setListBook}/>
                {/* <ListBook listBook={listBook} setListBook={setListBook}/> */}
            </div>
           
        </>
    )
}
export default Home;