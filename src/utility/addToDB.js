
import { toast } from "react-toastify";


const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) => {
    // console.log(id);
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast("already exist data");
    }
    else{
        // console.log("id will be added");
        storedList.push(id);
        const storedListStr = JSON.stringify( storedList);
        localStorage.setItem('read-list', storedListStr);
        toast("The book is add to your read list.")

    }
}

export {addToStoredReadList, getStoredReadList}