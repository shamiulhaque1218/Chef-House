import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './componemt/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './componemt/Layout'
import Login from './componemt/Login'
import ErrorPage from './componemt/ErrorPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout> </Layout>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element:  <Main> </Main>,
      },
      {
        path: "/login",
        element:  <Login> </Login>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
