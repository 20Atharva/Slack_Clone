import React, { useState } from 'react'
import {useAuth} from './context/authContext'
import { Route, Routes } from 'react-router-dom';

import Redirect from "./components/Redirect";
import Loading from "./components/Loading";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {

  const {user} = useAuth()

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
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        )
      }
      
    </React.Suspense>
  )
}

export default App
