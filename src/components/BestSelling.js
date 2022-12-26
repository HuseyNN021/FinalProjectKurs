import React from "react";
import './BestSelling.css'

function BestSelling() {
    return (
        <div className="Bestselling">
            <h2>Bestselling books</h2>
            <div className="BestBooks">
                <button className="left"> L </button>
                <div className="books">
                    <div className="book1">
                        <h3>What I Learned from the Trees</h3>
                        <h2>L.E. Bowman</h2>
                        <img src="https://www.booktopia.com.au/covers/big/9781638340065/7810/what-i-learned-from-the-trees.jpg"></img>
                        <p>USD$25.00</p>
                        <button>Order</button>
                    </div>
                    <div className="book1">
                        <h3>Thief River Falls</h3>
                        <h2>Brian Freeman</h2>
                        <img src="https://m.media-amazon.com/images/I/5121qEQkIgL.jpg"></img>
                        <p>USD$10.54</p>
                        <button>Order</button>
                    </div>
                    <div className="book1">
                        <h3>If It Bleeds</h3>
                        <h2>Stephen King</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/24/If_It_Bleeds_%28Stephen_King%29.png"></img>
                        <p>USD$13.57</p>
                        <button>Order</button>
                    </div>
                </div>
                <button className="right"> R </button>
            </div>
        </div>
    )
}
export default BestSelling