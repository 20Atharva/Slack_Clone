import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppProviders} from "./context/index"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProviders>
    <App />
  </AppProviders>
)