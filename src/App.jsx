import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Producct from './components/Producct'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Navbar />
    <Hero />
    <Producct />
    <About />
   </main>
  )
}

export default App
