import React from 'react'
import { PRODUCT } from '../constant'
const Producct = () => {
    return (
        <section id='product' className='py-20 md:py-28'>
            <div className='container mx-auto px-4'>
                <h2 className='capitalize font-ubuntu text-3xl font-bold text-dark text-center'>our products</h2>
                <p className='text-center font-mukta text-gray-500 font-semibold mt-4 text-lg  '>Explore our range of innovative products</p>
                <div className='flex justify-center gap-16 mt-10 flex-wrap '>
                    {
                        PRODUCT && (
                            PRODUCT.map(item => (
                                <div key={item.name} className='flex flex-col even:flex-row  odd:flex-row-reverse items-start justify-center md:items-center gap-y-10 ' >
                                    <div className='flex-1'>
                                        <img src={item.path} alt={`image of ${item.name}`} className='max-w-[30%] mx-auto' />
                                    </div>
                                    <div className='flex-1'>

                                        <h3 className='text-[1.3rem] tracking- font-semibold font-mukta mt-10 mb-4 text-left tracking-wider text-secondary'>{item.name}</h3>
                                        <p className='text-justify leading-[1.3rem] text-base font-mukta text-gray-600 font-medium tracking-wide mb-10 pr-32'>{item.description}</p>
                                        <a href="" className='text-blue-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Producct