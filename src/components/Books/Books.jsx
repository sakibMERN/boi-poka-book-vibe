import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  //use useState hook for storing data
  const [books, setBooks] = useState([]);

  //fetch data form public folder
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h2 className="playfair-font text-[40px] text-center font-bold leading-[53px] mb-9">
        Books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
