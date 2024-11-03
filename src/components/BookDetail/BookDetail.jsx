import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId} = useParams();
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>Book details: {bookId}</h2>
        </div>
    );
};

export default BookDetail;