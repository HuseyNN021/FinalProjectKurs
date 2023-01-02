import React, { useState } from "react";
import Aside from "./Aside";
import Categories from "./Categories";
import Header from "./Header";
import Input from "./Input";
import './Home.css'
import Main1 from "./Main1";
import Sign from "./Sign";
import ListBook from './SearchBook'
import BooksCarusel from "./BooksCarusel";

function Home() {
    let [listBook, setListBook] = useState([])
    let [search, setSearch] = useState('')

    console.log(listBook);
    return (
        <>
            <Header />
            <Input listBook={listBook} setListBook={setListBook} search={search} setSearch={setSearch} />
            <Categories search={search} setSearch={setSearch} />
            <div className="main">
                <Aside />
                <div className="main1">
                    <div className="main2">
                        <Main1 />
                        <Sign />
                    </div>
                    <BooksCarusel />
                    <ListBook listBook={listBook} setListBook={setListBook} />
                </div>

            </div>
        </>
    )
}
export default Home;


