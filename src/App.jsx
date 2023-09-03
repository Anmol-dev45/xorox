import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
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
    <Product />
    <About />
    {/* <Footer /> */}
    <Footern />
   </main>
  )
}

export default App
