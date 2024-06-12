import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
import User from './components/user/User.jsx'
import { Fetchdata } from './components/Github/Github.jsx'
import Github from "./components/Github/Github.jsx";
let router=createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
     <Route path="User/:userId" element={<User/>}/>
     <Route path="Github" element={<Github/>}
     loader={Fetchdata}/>
  </Route>
  </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
