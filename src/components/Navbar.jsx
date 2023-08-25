import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi"
import logo from "/images/logo.png"
const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (

        <header>
            <div className="container mx-auto  py-4 flex justify-between items-center">
                <div className='mt-[-10px]'>
                    <img src={logo} alt="" width={130} />
                </div>
                <nav className={`flex flex-col md:flex-row fixed md:static top-0 right-0 h-screen md:h-auto py-32  px-20 md:p-0 gap-5  md:gap-10  items-start md:items-center font-ubuntu bg-pure md:bg-transparent  ${open ? "max-md:-translate-x-[0%]" : "max-md:translate-x-[100%]"} transition-all duration-200 ease-linear z-20`}>
                    <a href="#" className='capitalize'>home</a>
                    <a href="#product" className='capitalize'>products</a>
                    <a href="#about" className='capitalize'>about us</a>
                    <div>
                        <button  className='btn'><a href='#contact'>contact</a></button>
                    </div>
                </nav>
                <div className={`flex md:hidden z-30  ${open && "fixed"} top-7 right-[0.8vw] `} onClick={() => setOpen(!open)}>
                    <BiMenuAltRight size={32} />
                </div>
            </div>
        </header>
    )
}

export default Navbar