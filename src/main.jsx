import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import App from './App'
import Home from './pages/Home'


const route = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "home",
    element: <Home />
  },
/*  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Secao_2",
    element: <SignUp />
  }*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={route} />
  </React.StrictMode>,
)
