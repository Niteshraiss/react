import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const c=true;
function App() {
  let count=0;
  const [counter,setCounter]=useState(0);
  const clickIncrement=()=>{
    setCounter(counter+1);
    console.log("increment",count);
    
  }
  const clickDecrement=()=>{
    setCounter(counter-1);
    console.log("decrement",count);

  }
  return (
    <>
      <div>
        Value of count is : {counter} and it's {(counter%2==0)? 'even' :'odd'}
      </div>
      <button onClick={clickIncrement}>
        Increment
      </button>
      <button onClick={clickDecrement}>Decrement</button>
    </>
  )
}

export default App
