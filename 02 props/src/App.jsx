import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='bg-black rounded-lg py-3'>Cards</h1>
      <Card name="ghost" post='Staff Engineer'/>
      <Card name='Robina'post='Tech Lead'/>
      <Card />
    </div>
  )
}

export default App
