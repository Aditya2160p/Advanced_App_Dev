import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Weblayout from './Layout/Weblayout'
import Contact from './Components/Public/Contact'
import Login from './Components/Public/Login'
import Signup from './Components/Public/Signup'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
