import React from 'react'

const Footer = () => {
    return (
        <section className='py-28 bg-secondary'>
            <div className="container mx-auto px-4 flex justify-between">
                <div className=''></div>
                <div className='mx-auto md:ml-auto md:mr-8'>
                    <h2 className='capitalize font-ubuntu text-3xl font-bold text-white text-center mb-8'>contact-us</h2>
                    <form action="">
                        <input type="text" placeholder='Name' className='p-2 block border-b-2 border-white w-[380px] md:w-[450px]  bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                        <input type="email" placeholder='Email' className='p-2 block border-b-2 border-white w-[380px] md:w-[450px]  bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                        <input type="text" placeholder='Write you message here...' className='p-2 block border-b-2 border-white w-[380px] md:w-[450px]  bg-transparent placeholder:text-pure text-left font-mukta text-white outline-none font-semibold mt-4 text-lg' />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Footer