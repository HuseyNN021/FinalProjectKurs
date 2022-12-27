import React from 'react';
import ListBook from './ListBook';
function Project({listBook,setListBook}){
    return(
        <div className='Project'>
            <ListBook listBook={listBook} setListBook={setListBook}/>
        </div>
    )
}
export default Project