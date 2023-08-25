import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className="container mx-auto px-4 md:px-24 mt-16 flex flex-col md:flex-row md:justify-between md:items-start gap-[60px]">
                <div className='flex-1'>
                    <div className='flex gap-2 items-center'>
                        <div className='h-10 w-[0.3rem] bg-secondary rounded-xl'></div>
                        <h1 className='text-3xl md:text-4xl'>Xorvix</h1>
                    </div>
                    <div className='text-4xl md:text-5xl font-ubuntu font-medium'>

                    <p className=' md:leading-[3.2rem]'>Engineering <span className='font-calligraffitti '>Excellence<br />Envisioning</span> Tommorow.</p>
                    </div>
                
                </div>
                <div className='flex-1'>
                    <p className='font-ubuntu text-justify md:pl-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus sapiente, doloribus nesciunt atque quaerat ad labore totam magnam, inventore at, minima asperiores corporis reprehenderit nostrum! Non!</p>
                    <button className="btn mt-6 lg:mt-8 mb-16 md:mb-52" >about us</button>
                </div>

            </div>
        </section>
    )
}

export default Hero