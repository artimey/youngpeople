import React from 'react'
import { partnersData } from '../../../mockData/partnersPage'

export const PartnersCards = () => {
  return (
    <div className="grid grid-cols-2 gap-[2rem] sm:grid-cols-5 sm:gap-[5.6rem] mb-[5.8rem]">
      {
        partnersData.map(item => {
          return (
            <div key={item.id} className="flex flex-col items-center">

              <div className="w-[19.5rem] h-[19.5rem] rounded-full overflow-hidden mb-[1.6rem]">
                <img className="w-full" src={item.img} alt={item.title} />
              </div>

              <div className='text-center'>
                <div className="block mb-[0.4rem] font-[500] text-white" >{item.title}</div>

                <div className='flex items-center justify-center text-white50'>
                  <span className='mr-[0.4rem]'>Мероприятия</span>
                  <span className="flex items-center justify-center w-[2.2rem] h-[2.6rem] bg-white8 rounded-[1rem]">{item.eventsCount}</span>
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
  )
}
