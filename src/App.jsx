import React, { useEffect } from 'react'
import {useAuth} from './context/authContext'
import { Route, Routes, useNavigate } from 'react-router-dom';

import Redirect from "./components/Redirect";
import Loading from "./components/Loading";
import MessageHistory from "./components/MessageHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import {channels} from "./constants"

function App() {

  const {user, setUser} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('user')
    setUser(user)
    if(user){
      navigate(`/channel/${channels[0].name}`)
    }
  },[])

  return (
    <React.Suspense
      fallback={
        <Loading/>
      }
    >
      {
        !user ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Redirect />} />
            <Route path="/register" element={<Redirect />} />
            <Route path="/" element={<Dashboard />} >
              <Route path="*" element={<MessageHistory/>}/>
            </Route>
          </Routes>
        )
      }
      
    </React.Suspense>
  )
}

export default App