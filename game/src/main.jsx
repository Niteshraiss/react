import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Arrayex from './Arrayex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Arrayex/>
  </StrictMode>,
)
