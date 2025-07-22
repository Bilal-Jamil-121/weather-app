import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='relative flex mt-2 text-5xl font-semibold justify-center w-full  text-white opacity-40'>
      Made by Bilal
      </div>
    <div>
      <Weather/>
    </div>
    
    
    </>
  )
}

export default App
