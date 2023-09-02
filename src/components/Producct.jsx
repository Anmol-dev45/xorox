import React from 'react'
import { PRODUCT } from '../constant'
import Gradient from './Gradient'
const Producct = () => {
    return (
        <section id='product' className='py-20 md:py-28'>
            <div className='container mx-auto px-4'>
                <h2 className='capitalize font-ubuntu text-6xl font-bold text-dark text-center'>our products</h2>
                
                <div className='flex justify-center gap-40 mt-44 flex-wrap '>
                    {
                        PRODUCT && (
                            PRODUCT.map(item => (
                                <div key={item.name} className='flex flex-col even:md:flex-row  odd:md:flex-row-reverse items-start md:items-center justify-center  gap-y-[80px] gap-x-[10px]' >
                                    <div className='flex-1 relative'>
                                        <div className='absolute -top-12 h-full w-full blur-[200px] -rotate-90 -z-40' >
                                            <Gradient />
                                        </div>
                                        <img src={item.path} alt={`image of ${item.name}`} className='aspect-square w-[55%] md:mx-auto object-cover border-[5px] border-dark/50 rounded-3xl bg-white p-12' />
                                    </div>
                                    <div className='flex-1'>

                                        <h3 className='text-[3rem] tracking- font-bold font-mukta mt-10 mb-4 text-left tracking-wider text-dark/90'>{item.name}</h3>
                                        <p className='text-justify leading-[1.3rem] text-lg font-mukta text-black-600  tracking-wide mb-10 '>{item.description}</p>
                                        <a href="" className='text-blue-700 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
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