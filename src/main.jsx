import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Getburn from './pages/landpages/Getburn.jsx'
import AppLaytout from './Layout/AppLaytout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<AppLaytout />}>
      <Route path='' element={<Getburn />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <App />
  </React.StrictMode>
)
