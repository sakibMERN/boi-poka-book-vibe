import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100  h-[482px] shadow-xl p-6">
        <figure className="rounded-xl object-cover bg-[#F3F3F3] py-8 mb-6">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="">
          <div className="mb-4 space-x-5 ">
            {tags.map((tag) => (
              <div className="badge bg-[#23BE0A0D] bg-opacity-5 py-4 px-[7px]">
                <p className="text-[#23BE0A] font-medium">{tag}</p>
              </div>
            ))}
          </div>
          <h2 className="card-title  text-2xl font-bold playfair-font mb-4">
            {bookName}
          </h2>
          <p className="font-bold mb-5">By: {author}</p>
          <hr className="border-t-2 border-dashed mb-5" />
          <div className="card-actions justify-between">
            <div className=" font-medium">{category}</div>
            <div className="flex gap-2">
              {rating}
              <IoStarSharp />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
