import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Producct from './components/Producct'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Navbar />
    <Hero />
    <Producct />
   </main>
  )
}

export default App
