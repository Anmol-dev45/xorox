import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Producct from './components/Producct'
import About from './components/About'
import Footer from './components/Footer'
import Footern from './components/Footern'

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
   </main>
  )
}

export default App
