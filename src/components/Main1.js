import React, { useState } from 'react'
import './Main1.css';
import logo1 from './images/Frame 4.png'
import logo2 from './images/image2.png'
import logo3 from './images/image3.png'

function Main1(){
    return(
       <div className='main3'>
                    <img className='mainImage1' src={logo1}></img>

        <div className='res'>
            {/* <img className='mainImage2' src={logo2}></img>
            <img className='mainImage3' src={logo3}></img>
            <img className='mainImage3' src={logo3}></img>
            <img className='mainImage3' src={logo3}></img>
            <img className='mainImage3' src={logo3}></img> */}
            {/* <p>image</p> */}
        </div>
           
       </div>
    )
}

export default Main1