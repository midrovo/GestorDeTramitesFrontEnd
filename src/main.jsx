import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom"
import React from 'react'
import { Rutas } from './routes/Rutas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ Rutas }/>
  </React.StrictMode>
)
