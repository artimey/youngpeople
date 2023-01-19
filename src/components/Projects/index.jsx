import React from 'react'
import photo from '../../img/Photo.png'
import photo1 from '../../img/Photo-1.png'
import photo2 from '../../img/Photo-2.png'
import photo3 from '../../img/Photo-3.png'
import { ReactComponent as ArrowR } from '../../img/arrowR.svg'

export const Projects = () => {

  const data = [
    {title: "МедиаШУМ", img: photo},
    {title: "КиберМосква", img: photo1},
    {title: "НаРайоне", img: photo2},
    {title: "ДеБаттл", img: photo3},
  ]

  return (
    <section className="bg-brandBlue py-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <h2 className='mb-[51px] text-white font-[700] text-[48px] leading-[52.8px] tracking-[-2%] flex items-center'>
          Наши проекты
          <ArrowR className="ml-[14px] mt-2" />
        </h2>

        <div className='flex justify-between'>
          {
            data.map(item => {
              return (
                <div key={item.title} className='text-center'>
                  <img className='w-[260px] mb-[24px]' src={item.img} alt={item.title} />
                  <span className='text-[20px] leading-[25px] font-[500] text-white50'>{item.title}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}