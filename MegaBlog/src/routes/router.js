// src/router.js
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home' // <-- create this file if it doesn't exist

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])

export default router
