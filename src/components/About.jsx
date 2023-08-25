import React from 'react'
import { TEAM } from '../constant'
const About = () => {
  return (
    <section className='py-40'>
      <div className="container mx-auto px-4">
        <h2 className='capitalize font-ubuntu text-3xl font-bold text-dark text-center'>meet our team</h2>
        <div className='flex justify-center gap-x-28 gap-y-16 mt-16 flex-wrap'>
          {
            TEAM.map(item => (
              <div key={item.name} className=''>
                <div>
                  <img src={item.path} alt={`image of ${item.name}`} className='mx-auto w-32
                  aspect-square object-cover rounded-full'/>
                </div>
                <h3 className='text-[1.3rem] tracking- font-semibold font-mukta mt-4 text-center tracking-wider'>

                  {item.name}
                </h3>
                <p className='text-center leading-[1.3rem] text-base font-mukta text-gray-600 font-medium tracking-wide'>{item.position}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About