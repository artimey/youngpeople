import React from 'react'

import photo from '../../img/projects/Photo.png'
import photo1 from '../../img/projects/Photo-1.png'
import photo2 from '../../img/projects/Photo-2.png'
import photo3 from '../../img/projects/Photo-3.png'
import photo4 from '../../img/projects/Photo-4.png'
import photo5 from '../../img/projects/Photo-5.png'
import photo6 from '../../img/projects/Photo-6.png'
import photo7 from '../../img/projects/Photo-7.png'
import photo8 from '../../img/projects/Photo-8.png'
import photo9 from '../../img/projects/Photo-9.png'
import { ReactComponent as ArrowR } from '../../img/arrowR.svg'
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout'

export const Projects = () => {

  const data = [
    {title: "МедиаШУМ", img: photo, link: 'https://vk.com/shumteam'},
    {title: "КиберМосква", img: photo1, link: 'https://vk.com/cybermsk'},
    {title: "НаРайоне", img: photo2, link: 'https://vk.com/na_rayone_project'},
    {title: "ДеБаттл", img: photo3, link: 'https://vk.com/show_debattle'},
    {title: "Stand Up Лига", img: photo4, link: 'https://vk.com/stud.standup'},
    {title: "Лига КВН «Молодежь Москвы»", img: photo5, link: 'https://vk.com/liga_lampa'},
    {title: "ВРаботе", img: photo6, link: 'https://vk.com/vrabote_me'},
    {title: "Город Героев Москва", img: photo7, link: 'https://vk.com/gorodgm'},
    {title: "Стены", img: photo8, link: 'https://t.me/stenyii'},
    {title: "Портал «Молодежь Москвы»", img: photo9, link: 'https://vk.com/molodezh_msk'},
  ]

  return (
    <section className="bg-brandBlue pt-[80px]">
      <ContainerLayout>

        <h2 className='heading'>
          Наши проекты
          {/* <ArrowR width={"2rem"} height={"3.2rem"} className="ml-[1.4rem] mt-[0.8rem]" /> */}
        </h2>

        <div className='grid grid-cols-2 gap-[2rem] md:grid-cols-5 md:gap-[3rem]'>
          {
            data.map(item => {
              return (
                <a href={item.link} target="_blank" key={item.title} className='text-center mb-[2rem] md:mb-[5rem] cursor-pointer'>
                  <img className='w-full mb-[2.4rem]' src={item.img} alt={item.title} />
                  <span className='text-[2rem] leading-[2.5rem] font-[500] text-white50 hover:text-white'>{item.title}</span>
                </a>
              )
            })
          }
        </div>
      </ContainerLayout>
    </section>
  )
}