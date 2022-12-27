import  {React, useState, useEffect } from "react";
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
    listBook?.map((book)=>{
        const h=book.volumeInfo.imageLinks;
        console.log(h);
    })
   
    return (
        <div className="listShow">
            <h2>Salam</h2>
            {listBook?.map((book) => {
                return (
                    <div>
                        <h3>{book.volumeInfo.title}</h3>
                        {/* <img src={book.volumeInfo.imageLinks} alt="alt"></img> */}
                    </div>
                )

            })}
        </div>
    )
}

export default ListBook