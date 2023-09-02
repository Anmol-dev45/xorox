import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Producct from './components/Producct'
import About from './components/About'
import Footer from './components/Footer'
import Footern from './components/Footern'
import Gradient from './components/Gradient'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Navbar />
    <Hero />
    <Producct />
    <About />
    {/* <Footer /> */}
    <Footern />
    <Gradient />
   </main>
  )
}

export default App
