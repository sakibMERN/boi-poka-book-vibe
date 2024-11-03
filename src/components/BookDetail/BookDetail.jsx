import React from "react";
import './BookDetail.css'
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDB";
import { addToStoreWishList } from "../../utility/addToWishList";

const BookDetail = () => {
  const { bookId } = useParams();

  const id = Number(bookId);
//   console.log(bookId, id);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    
    addToStoredReadList(id);
  }

  const handleWishList = (id) => {
    addToStoreWishList(id);
  }

  return (
    <div className="lg:flex lg:items-center gap-12 md:mb-24 ">
      <div className="md:w-[573px] bg-[rgba(19,19,19,0.05)] p-[74px] rounded-2xl">
        <img src={image} className="max-w-[425px] rounded-2xl object-cover" alt={bookName} />
      </div>
      <div>
        <h2 className="playfair-font text-[40px] font-bold leading-[53px] mb-4">
          {bookName}
        </h2>

        <p className="text-xl font-medium text-[rgba(19,19,19,0.8)] mb-6">
          By: {author}
        </p>

        <div className="border-t-2 border-dashed mb-4"></div>

        <p className="text-[#131313CC] text-xl font-medium mb-4">{category}</p>

        <div className="border-t-2 border-dashed mb-4"></div>

        <p className="mb-8">
          <span className="font-bold">Review: </span>
          <span className="text-[#131313B3]">{review}</span>
        </p>

        <div className="flex items-center gap-8 mb-6">
          <p className="font-bold">Tag</p>
          <div className="space-x-5">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="badge bg-[#23BE0A0D] bg-opacity-5 px-4 py-4"
              >
                <p className="text-[#23BE0A] font-medium">{tag}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-dashed mb-6"></div>

        <div className="overflow-x-auto mb-8">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Number of Pages: </td>

                <td>{totalPages}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Publisher:</td>

                <td>{publisher}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Year of Publishing:</td>

                <td>{yearOfPublishing}</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>Rating</td>

                <td>{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-x-4">
        <button onClick={()=> handleMarkAsRead(id)} className="btn bg-white">Mark As Read</button>
        <button onClick={() => handleWishList(id)} className="btn bg-[#50B1C9] text-white">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
