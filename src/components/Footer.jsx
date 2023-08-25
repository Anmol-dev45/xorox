import React from 'react'
import { LiaFacebook, LiaFacebookMessenger } from "react-icons/lia"
import { PiTiktokLogo, PiTwitterLogo } from "react-icons/pi"

const Footer = () => {
    return (
        <section id='contact' className='pt-24 pb-10 bg-secondary'>
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row justify-between gap-x-10">
                <div className='flex flex-col justify-between w-full'>
                    <h1 className='text-5xl text-white font-ubuntu font-black'>Xorvix</h1>
                    <div className='text-white font-semibold flex justify-between'>
                        <div className='flex flex-col items-start gap-y-5'>
                            <p className='capitalize'>kathmandu, nepal</p>
                            <p>+01232456789</p>
                            <p>info@xorvix.com</p>

                        </div>
                        <div className='capitalize flex flex-col items-start gap-y-5'>
                            <p>gallery</p>
                            <p>photos</p>
                            <p>videos</p>
                        </div>
                        <div className='capitalize flex flex-col items-start gap-y-5'>
                            <p>terms & condition</p>
                            <p>socials</p>
                            <div className='flex gap-2 text-2xl'>
                                <LiaFacebook />
                                <LiaFacebookMessenger />
                                <PiTiktokLogo />
                                <PiTwitterLogo />
                            </div>
                        </div>
                    </div>
                    <p className='text-white font-semibold mt-4'>Copyright<span>&#169;</span>Xorvix All right Reserved</p>
                </div>
                <div className='md:ml-auto md:mr-4'>
                    <h2 className='capitalize font-ubuntu text-3xl font-bold text-white text-center mb-8'>contact us</h2>
                    <form action="" className=' max-md:w-full'>
                        <input type="text" placeholder='Name' className='p-2 block border-b-2 border-white w-[100%] md:w-[450px]  bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                        <input type="email" placeholder='Email' className='p-2 block border-b-2 border-white w-[100%] md:w-[450px]  bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                        <input type="text" placeholder='Write you message here...' className='p-2 block border-b-2 border-white w-[100%] md:w-[450px]  bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Footer