import './App.css'
import Home from './Pages/Home'
import { BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Weblayout from './Layout/Weblayout'
import Contact from './Components/Public/Contact'
import UserProfile from './Components/User/UserProfile'
import React, { Suspense, lazy } from 'react'
import Preloader from './Components/Public/Preloader'
import Userlayout from './Layout/UserLayout'
import Membership from './Components/User/membership'
// const Home =lazy(()=> import('./Pages/Home'))
const Signup =lazy(()=> import('./Components/Public/Signup')) 
const Login =lazy(()=> import('./Components/Public/Login'))
const Terms =lazy(()=> import('./Components/Public/Terms'))
function App() {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Preloader/>}>
    <Routes>
      <Route element={<Weblayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/terms' element={<Terms/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      </Route>
      <Route element={<Userlayout/>}>
        <Route path="/user/dashboard" element={<UserProfile/>}/>
        <Route path="/user/membership" element={<Membership/>}/>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
