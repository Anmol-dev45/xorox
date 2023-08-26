import React from 'react'
import { LiaFacebook, LiaFacebookMessenger } from "react-icons/lia"
import { PiTiktokLogo, PiTwitterLogo } from "react-icons/pi"

const Footern = () => (
    <section id='contact' className='pt-24 pb-10 bg-secondary'>
        <div className="container mx-auto px-4 ">
            <div className='flex flex-col-reverse md:flex-row justify-between gap-8'>

                <div className='flex flex-col md:flex-row items-start gap-8 justify-between  w-full  text-white font-semibold'>
                    <div className='border-white pb-6 border-b-2 md:border-b-0 md:border-r-2 flex-1 md:pr-8'>
                        <h1 className='text-5xl md:text-[4.5rem]  font-ubuntu font-black md:mb-6'>Xorvix</h1>
                        <p className='text-justify  md:mb-6'>Pioneering Tomorrow's Possibilities. We blend innovation and expertise to engineer solutions that redefine industries.</p>
                    </div>
                    <div className='flex flex-col items-start gap-y-2 flex-1'>
                        <p className='text-xl'>Email</p>
                        <p>info@xorvix.com</p>
                        <p className='text-xl'>Phone</p>
                        <p>+01232456789</p>
                        <p className='text-xl'>Adress</p>
                        <p className='capitalize '>kathmandu, nepal</p>

                    </div>

                    <div className='capitalize flex flex-col items-start gap-y-5 flex-1'>
                        <p className='text-lg'>socials</p>
                        <div className='flex flex-col gap-2 text-2xl'>
                            <div className='flex items-center gap-2'>
                                <LiaFacebook />
                                <p className='text-base '>Facebook</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <LiaFacebookMessenger />
                                <p className='text-base '>Messaeger</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <PiTiktokLogo />
                                <p className='text-base '>tiktok</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <PiTwitterLogo />
                                <p className='text-base '>twitter</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:ml-auto md:mr-4'>
                    <h2 className='capitalize font-ubuntu text-3xl font-bold text-white text-center mb-8'>contact us</h2>
                    <form action="" className=' max-md:w-full'>
                        <input type="text" placeholder='Name' className='p-2 block border-b-2 border-white w-[100%] md:w-[25vw] max-h-[450px] bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                        <input type="email" placeholder='Email' className='p-2 block border-b-2 border-white w-[100%] md:w-[25vw] max-h-[450px] bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                        <input type="text" placeholder='Write you message here...' className='p-2 block border-b-2 border-white w-[100%] md:w-[25vw] max-h-[450px] bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                        <button type='submit' className='btn-footer mt-4'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between md:items-center text-white font-semibold'>

                <p className='mt-4'>Copyright<span>&#169;</span> Xorvix. All right Reserved.</p>
                <p className='capitalize'>terms & condition</p>
            </div>
        </div>
    </section>
)

export default Footern