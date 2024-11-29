import { useState } from 'react'
import './App.css'
import Grid from './components/Grid/Grid';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Grid noOfCards={9}/>
    </>
  )
}

export default App
