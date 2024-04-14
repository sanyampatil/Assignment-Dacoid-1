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
import TrackGoal from './pages/landpages/TrackGoal.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<AppLaytout />}>
      <Route path='' element={<Getburn />} />
      <Route path='/getBurn' element={<TrackGoal />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <App />
  </React.StrictMode> 
)
