
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import {ROUTES} from "./routes/index.jsx"
import './App.css'

const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
