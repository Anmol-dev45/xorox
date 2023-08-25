import React from 'react'
import { PRODUCT } from '../constant'
const Producct = () => {
    return (
        <section className='bg-secondary py-20 md:py-28'>
            <div className='container mx-auto px-4'>
                <h2 className='capitalize font-ubuntu text-3xl font-bold text-white text-center'>our products</h2>
                <p className='text-center font-mukta text-white opacity-90 font-semibold mt-4 text-lg  '>Explore our range of innovative products</p>
                <div className='flex justify-center gap-16 mt-10 flex-wrap '>
                    {
                        PRODUCT && (
                            PRODUCT.map(item => (
                                <div key={item.name} className='p-8 bg-white rounded-xl w-[400px]' >
                                    <div >
                                        <img src={item.path} alt={`image of ${item.name}`} className='max-w-[30%] mx-auto' />
                                    </div>
                                    <h3 className='text-[1.3rem] tracking- font-semibold font-mukta mt-10 mb-4 text-center tracking-wider'>{item.name}</h3>
                                    <p className='text-center leading-[1.3rem] text-base font-mukta text-gray-600 font-medium tracking-wide'>{item.description}</p>
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