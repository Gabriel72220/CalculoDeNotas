import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={route} />
  </React.StrictMode>,
)
