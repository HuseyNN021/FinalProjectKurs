import { React, useState, useEffect } from "react";
import { BookUrl } from '../services/db'
import axios from "axios";
import './SearchBook.css'
import { Link } from "react-router-dom";

function ListBook({ listBook, setListBook,qiymet,setQiymet }) {
    const [books, setBooks] = useState([])
    console.log(listBook);

    useEffect(() => {
        axios.get(BookUrl).then(res => {
            console.log(res.data.items);
            setBooks(res.data.items)
        }).catch(err => console.log(err))
    }, [])
    function addBasket(){
        qiymet=qiymet+20;
        setQiymet(qiymet)
    }


    return (
        <div className="listShow">
            {/* <div className="SearchList"> */}
            {listBook?.map((book) => {
                return (
                    <div className="SearchListBook">
                        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}></img>
                        <div className="bookShowInfo">
                            <h3>{book.volumeInfo.title}</h3>
                            <Link to='/MoreInfo' state={listBook}>
                                <button className="MoreInfoBook">More Info</button>
                            </Link>
                            <button className="MoreInfoBook" onClick={addBasket}>Add Basket</button>
                        </div>
                    </div>
                )

            })}

            {/* </div> */}
        </div>
    )
}

export default ListBook