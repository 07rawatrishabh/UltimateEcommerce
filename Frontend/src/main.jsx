import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import LoginPage from './components/LoginPage'
import Customer from './components/Customer'
import './index.css'
import Product from './components/Product'
import Shipping from './components/Shipping'
import Home from './components/Home' 

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/LoginPage",
        element:<LoginPage/>
      },
      {
        path:"/Customer",
        element:<Customer/>
      },
      {
        path:"/Product",
        element:< Product/>
      },
       {
        path:"/Shipping",
        element:< Shipping/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
