import React from 'react'
import photo from '../../img/Photo.png'
import photo1 from '../../img/Photo-1.png'
import photo2 from '../../img/Photo-2.png'
import photo3 from '../../img/Photo-3.png'
import { ReactComponent as ArrowR } from '../../img/arrowR.svg'
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout'

export const Projects = () => {

  const data = [
    {title: "МедиаШУМ", img: photo},
    {title: "КиберМосква", img: photo1},
    {title: "НаРайоне", img: photo2},
    {title: "ДеБаттл", img: photo3},
  ]

  return (
    <section className="bg-brandBlue py-[80px]">
      <ContainerLayout className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <h2 className='heading'>
          Наши проекты
          <ArrowR width={"2rem"} height={"3.2rem"} className="ml-[1.4rem] mt-[0.8rem]" />
        </h2>

        <div className='flex justify-between'>
          {
            data.map(item => {
              return (
                <div key={item.title} className='text-center'>
                  <img className='w-[26rem] mb-[2.4rem]' src={item.img} alt={item.title} />
                  <span className='text-[2rem] leading-[1.3rem] font-[500] text-white50'>{item.title}</span>
                </div>
              )
            })
          }
        </div>
      </ContainerLayout>
    </section>
  )
}