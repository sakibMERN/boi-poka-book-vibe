import React from 'react';
import { Tab, TabList, Tabs } from 'react-tabs';

const ListedBooks = () => {
    return (
        <div>
            <h3 className="text-3xl my-10">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
            </Tabs>
        </div>
    );
};

export default ListedBooks;