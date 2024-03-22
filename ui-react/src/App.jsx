// App.js

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weblayout from './Layout/Weblayout'
import UserProfile from './Components/User/UserProfile'
import React, { Suspense, lazy, useState } from 'react'
import Preloader from './Components/Public/Preloader'
import Userlayout from './Layout/UserLayout'
import AdminLayout from './Layout/AdminLayout'
import AdminLogin from './Components/Public/AdminLogin'
import Notfound from './Pages/Notfound'
// import Analytics from './Components/Admin/Analytics'

// Lazy loaded components
const Contact = lazy(()=> import('./Components/Public/Contact'))
const Membership = lazy(()=> import('./Components/User/membership'));
const AdminProfile = lazy(() => import('./Components/Admin/AdminProfile'));
const Settings = lazy(() => import('./Components/User/Settings'));
const Analytics = lazy(() => import('./Components/Admin/Analytics'));
const Usersdata = lazy(() => import('./Components/Admin/Userdata'));
const Home = lazy(() => import('./Pages/Home'))
const Signup = lazy(() => import('./Components/Public/Signup'))
const Login = lazy(() => import('./Components/Public/Login'))
const Terms = lazy(() => import('./Components/Public/Terms'))
function App() {
  // State to manage user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Additional logic for clearing user data, if any
  };

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route element={<Weblayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login onLogin={handleLogin} />} />
              <Route path='/signup' element={<Signup />} />
              <Route path="/admin/login" element={<AdminLogin/>}/>
            </Route>
            <Route element={<Userlayout />}>
              <Route path="/user/dashboard" element={<UserProfile />} />
              <Route path="/user/membership" element={<Membership />} />
              <Route path="/user/settings" element={<Settings />} />
            </Route>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminProfile/>}/>
              <Route path="/admin/analytics" element={<Analytics/>}/>
              <Route path="/admin/userdata" element={<Usersdata/>}/>
            </Route>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
