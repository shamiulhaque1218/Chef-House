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
import Blog from './componemt/Blog'
import Registration from './componemt/Registration'
import AuthProvider from './componemt/provider/AuthProvider'
import ViewDetailes from './componemt/ViewDetailes'
import PrivateRoute from './componemt/PrivateRoute'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout> </Layout>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element:  <Main> </Main>,
        loader: () => fetch('https://server-site-assignment-10-shamiulhaque1218.vercel.app/card'),

      },
      {
        path: "/card/:id",
        element:  <PrivateRoute> <ViewDetailes> </ViewDetailes> </PrivateRoute>,
        loader: ({params}) => fetch(`https://server-site-assignment-10-shamiulhaque1218.vercel.app/card/${params.id}`),

      },
      {
        path: "/login",
        element:  <Login> </Login>,
      },
      {
        path: "/blog",
        element:  <Blog> </Blog>,
      },
      {
        path: "/registration",
        element:  <Registration> </Registration>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
