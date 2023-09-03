import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import logo from '/images/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <div className="container mx-auto py-4 flex justify-between items-center relative">
                <div className="mt-[-10px]">
                    <img src={logo} alt="" width={130} />
                </div>
                <nav
                    className={`flex flex-col md:flex-row fixed md:static top-0 right-0 h-screen md:h-auto py-32 px-20 md:p-0 gap-5 md:gap-10 items-start md:items-center font-ubuntu bg-pure md:bg-transparent ${open ? 'max-md:-translate-x-[0%]' : 'max-md:translate-x-[100%]'
                        } transition-all duration-300 ease-linear z-20`}
                >
                    <a href="#product" className="capitalize hover:text-primary transition-all duration-200 ease-linear">
                        products
                    </a>
                    <a href="#about" className="capitalize hover:text-primary transition-all duration-200 ease-linear">
                        about us
                    </a>
                    <div>
                        <a href="#contact">
                            <button className="btn">
                                contact
                            </button>
                        </a>
                    </div>
                </nav>
                <div
                    className={`flex md:hidden z-30 ${open ? 'fixed' : 'relative'} right-0`}
                    onClick={() => setOpen(!open)}
                >
                    <BiMenuAltRight size={32} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;