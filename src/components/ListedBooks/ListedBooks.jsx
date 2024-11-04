import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {

  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData() || [];
  
  console.log(Array.isArray(allBooks));

  useEffect(() => {
    const getReadList = getStoredReadList();
    console.log(getReadList);

    // console.log(readList);
    if (Array.isArray(allBooks) && getReadList.length > 0) {
      const readList = allBooks.filter((book) =>
        getReadList.includes(book.bookId)
      );
      setReadList(readList);
      // console.log("this is readList: ", readList);
    }
  }, []);

  return (
    <div className="mb-20">
      <h3 className="text-3xl my-10">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>
        <TabPanel>
          <h2 className="text-2xl">Book I Read: {readList.length}</h2>
          <div className="flex flex-col gap-5 mt-10">
            {
              readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">Book I Wish</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
