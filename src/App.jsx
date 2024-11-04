
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './components/Root/Root'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import BookDetail from './components/BookDetail/BookDetail'
import ListedBooks from './components/ListedBooks/ListedBooks'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('./booksData.json')
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
])

function App() {
  

  return (
    <>
      
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' style={{width:'400px',height:'200px'}}></ToastContainer>
      
    </>
  )
}

export default App
