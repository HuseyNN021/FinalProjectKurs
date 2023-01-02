import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './BookCarusel.css'

function BooksCarusel() {
    const responsive = {
        superLargeDesktop: {
           
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="carusel">
            <Carousel responsive={responsive}>
                <div className="carusel_Book">
                    <h2>Metro 2033</h2>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/61JbxV8r2mL._AC_UL600_SR600,600_.jpg" alt="carusel"></img>
                </div>
                <div className="carusel_Book">
                    <h2>Lord of the flies</h2>
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1340919381l/84943._SY475_.jpg" alt="carusel"></img>
                </div>
                <div className="carusel_Book">
                    <h2>Fobiya</h2>
                    <img src="https://1k-cdn.com/resimler/kitaplar/325284_b281f_1635951692.jpg" alt="carusel"></img>
                </div>
                <div className="carusel_Book">
                    <h2>Şəkər portağalı</h2>
                    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1431595380l/13490314._SY475_.jpg" alt="carusel"></img>
                </div>
                <div className="carusel_Book">
                    <h2>Mavi qatarın sirri</h2>
                    <img src="https://m.media-amazon.com/images/I/51JOcvU9LYL._AC_SY780_.jpg" alt="carusel"></img>
                </div>
                <div className="carusel_Book">
                    <h2>Cinayət və cəza</h2>
                    <img src="https://image.winudf.com/v2/image/Y29tLmNvc21vZHJvbmUuYm9vay5BT1ZTUEZBVkZaQ0FSWVdHTF9zY3JlZW5zaG90c18wX2RlOTUxZWRl/screen-0.jpg?h=500&fakeurl=1&type=.jpg" alt="carusel"></img>
                </div>
                <div className="carusel_Book">
                    <h2>A</h2>
                    <img src="https://static.insales-cdn.com/images/products/1/7019/352385899/Qaraqan_A_qapaq_Esas.png" alt="carusel"></img>
                </div>
                <div className="carusel_Book">
                    <h2>Kitab oğrusu</h2>
                    <img src="https://1k-cdn.com/k/resimler/kitaplar/302707_850fe_1576171222.jpg" alt="carusel"></img>
                </div>

            </Carousel>;
        </div>
    )
}

export default BooksCarusel