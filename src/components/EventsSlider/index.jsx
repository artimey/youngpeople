import React, { useEffect } from 'react'

import org1 from '../../img/LOGO.png'
import org2 from '../../img/LOGO-1.png'
import org3 from '../../img/LOGO-2.png'

import cardImage1 from '../../img/Content.png'
import cardImage2 from '../../img/Content-1.png'
import cardImage3 from '../../img/Content-2.png'

import { ReactComponent as ArrowR } from '../../img/arrowR.svg'
import { ReactComponent as Calendar } from '../../img/calendar.svg'
import { ReactComponent as Place } from '../../img/place.svg'
import { Col, Row } from 'antd'

export const EventsSlider = () => {

  const data = [
    {
      title: "Музей «Гараж» запускает виртуальные экскурсии по выставкам",
      img: cardImage1,
      date: "20-21 Декабря",
      place: "Арка Главного входа ВДНХ",
      org: "Музей современного искусства «Гараж»",
      orgImg: org1
    },
    {
      title: "День молодежи",
      img: cardImage2,
      date: "24 Декабря, 19:00",
      place: "Парк Горького",
      org: "Министерство просвещения Российской Федерации",
      orgImg: org2
    },
    {
      title: "Экскурсия в кремль c Молодежей Москвы",
      img: cardImage3,
      date: "1,2,3,4 января, 21:00 – 22:00",
      place: "Красная площадь",
      org: "«Молодежь Москвы»",
      orgImg: org3
    },
  ]

  return (
    <section className='bg-brandBlue rounded-t-[32px] py-[80px] border-t-2 border-t-white8'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className='mb-[51px] text-white font-[700] text-[48px] leading-[52.8px] tracking-[-2%] flex items-center'>
          Все мероприятия
          <ArrowR className="ml-[14px] mt-2" />
        </h2>

        <Row gutter={[24, 16]} className="flex items-stretch">
          {
            data.map((item, idx) => {
              return (
                <Col span={8} key={idx}>
                  <div className='bg-white rounded-[28px] h-full relative'>
                    <div className='p-[12px] mb-[15px]'>
                      <img className='w-full' src={item.img} alt="alt" />
                    </div>

                    <div className='px-[24px] mb-[125px]'>
                      <h3 className='font-[700] text-[24px] leading-[26.4px] mb-[26px]'>{item.title}</h3>

                      <div className='flex items-center text-[16px] font-[500] mb-[10px]'>
                        <Calendar className='mr-[14.5px]'/>
                        {item.date}
                      </div>

                      <div className='flex items-center text-[16px] font-[500]'>
                        <Place className='mr-[14.5px]'/>
                        {item.place}
                      </div>
                    </div>

                    <div className='w-full absolute bottom-0 left-0 pt-[25px] pb-[32px] px-[24px] flex items-center border-t-2 border-black8 rounded-t-[32px]'>
                      <img className='w-[40px] h-[40px] mr-[16px]' src={item.orgImg} alt="img" />
                      <span>{item.org}</span>
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </div>
    </section>
  )
}