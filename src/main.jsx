import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { HomePage } from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>Error 404</div>,
  },

  {
    path: "/home",
    element: <HomePage/>
  },

  {
    path: "/not-found",
    element: <div>404 Usuario no Existe</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router }/>
)
