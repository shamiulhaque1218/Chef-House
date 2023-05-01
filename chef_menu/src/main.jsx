import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './componemt/Main'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Error from './componemt/Error'
import Layout from './componemt/Layout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout> </Layout>,
    errorElement: <Error> </Error>,
    children: [
      {
        path: "/",
        element:  <Main> </Main>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
