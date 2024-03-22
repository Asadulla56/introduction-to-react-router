import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './compontents/Home/Home.jsx';
import About from './compontents/About/About.jsx';
import Contact from './compontents/Contact/Contact.jsx';
import Users from './compontents/Users/Users.jsx';
import App from './App.jsx'
import UserDitails from './compontents/UserDitails/UserDitails.jsx';
import Posts from './compontents/Posts/Posts.jsx';
import PostDitails from './compontents/PostDitails/PostDitails.jsx';
import ErrorPage from './compontents/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userid',
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element:<UserDitails></UserDitails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDitails></PostDitails>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
