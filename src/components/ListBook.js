import React, { useState, useEffect } from "react";
import { BookUrl } from '../services/db'
import axios from "axios";
function ListBook() {
    const [books, setBooks] = useState([])


    useEffect(() => {
        axios.get(BookUrl).then(res => {
            console.log(res.data);
            setBooks(res.data)
        }).catch(err => console.log(err))
    }, [])

    // books.map((book)=>{
    //     console.log(book.title);
    // })
    return (
        <div className="listShow">
            <h2>Salam</h2>
            {books.map((book) => {
                return (
                    <div>
                        <h2>{book.title}</h2>
                        <img src={book.image_url} alt="alt"></img>
                    </div>
                )

            })}
        </div>
    )
}

export default ListBook