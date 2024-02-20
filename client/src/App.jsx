import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import About from '../src/pages/About'
import Profile from '../src/pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>


    </BrowserRouter>
  )
}
