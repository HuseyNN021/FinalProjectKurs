import { React, useState, useEffect } from "react";
import { BookUrl } from '../services/db'
import axios from "axios";
import './SearchBook.css'

function ListBook({ listBook, setListBook }) {
    const [books, setBooks] = useState([])
    console.log(listBook);

    useEffect(() => {
        axios.get(BookUrl).then(res => {
            console.log(res.data.items);
            setBooks(res.data.items)
        }).catch(err => console.log(err))
    }, [])
    listBook?.map((book) => {
        const h = book.volumeInfo.imageLinks;
        console.log(h);
    })

    return (
        <div className="listShow">
            {/* <div className="SearchList"> */}
                {listBook?.map((book) => {
                    return (
                        <div className="SearchListBook">
                            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}></img>
                            <div className="bookShowInfo">
                                <h3>{book.volumeInfo.title}</h3>
                                <button className="MoreInfoBook">More Info</button>
                            </div>
                        </div>
                    )

                })}

            {/* </div> */}
        </div>
    )
}

export default ListBook