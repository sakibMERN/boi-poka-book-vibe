import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=> {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="playfair-font text-[40px] text-center font-bold leading-[53px] mb-9">Books</h2>
            <p>BOOK: {books.length}</p>
        </div>
    );
};

export default Books;