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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
        element:<Users></Users>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
