import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  function changeColor(color) {
    setColor(color)
  }

  return (
    <div className='w-full h-screen flex items-center duration-200' style={{backgroundColor: color}}>
      <div className='fixed h-screen flex flex-wrap justify-center items-center
       inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-red-500'>Red</button>
          <button onClick={()=> setColor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg text-orange-500'>Orange</button>
          <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-green-500'>Green</button>
          <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-blue-500'>Blue</button>
          <button onClick={()=> setColor('olive')} className='outline-none px-4 py-1 rounded-full shadow-lg text-olive'>Olive</button>
          <button onClick={()=> setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg text-pink-500'>Pink</button>
          <button onClick={()=> setColor('purple')} className='outline-none px-4 py-1 rounded-full shadow-lg text-purple-500'>Purple</button>
          <button onClick={()=> setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-yellow-500'>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
