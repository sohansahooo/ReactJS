import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  const [counter, setCounter] = useState(0)   // State

  // Logic
  const plusValue = () => {
    // setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 3)
  }
  const minusValue = () => {
    // setCounter(counter - 1)
    setCounter((prevCounter) => prevCounter - 0.3)
  }


  return (
    <>
    <h1>Hello, World!</h1>
    <h3>Couter Value: {counter} </h3>
    <div>
      <button onClick={plusValue}>Increase</button> {" "}
      <button onClick={minusValue}>Decrease</button>
    </div>
    </>
  )
}

export default App
