import React, { useState, useEffect } from "react";
import { BookUrl } from '../services/db'
import axios from "axios";
function ListBook({listBook,setListBook}) {
    const [books, setBooks] = useState([])
    console.log(listBook);

    useEffect(() => {
        axios.get(BookUrl).then(res => {
            console.log(res.data.items);
            setBooks(res.data.items)
        }).catch(err => console.log(err))
    }, [])

   
    return (
        <div className="listShow">
            <h2>Salam</h2>
            {listBook?.map((book) => {
                return (
                    <div>
                        <h2>{book.volumeInfo.title}</h2>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="alt"></img>
                    </div>
                )

            })}
        </div>
    )
}

export default ListBook