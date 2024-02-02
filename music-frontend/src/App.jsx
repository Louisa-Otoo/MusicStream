import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Pages/RootLayout'
import Home from './Pages/Home'
import Discover from './Pages/Discover'
import Login from './Pages/Login'
import Register from './Pages/Register'
import HighLife from './components/HighLife/HighLife'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "discover",
        element: <Discover />,
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App