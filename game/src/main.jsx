import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Arrayex from './Arrayex.jsx'
import Avatar from './Avatar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Arrayex/>
    <Avatar
    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    width="200px"
    height="200px"
    />
    <Avatar
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
    width="200px"
    height="200px"
    />
  </StrictMode>,
)
