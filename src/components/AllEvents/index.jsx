import React, { useEffect } from 'react'
import './allEvents.scss'

import newsImage from '../../img/news.png'

import { ReactComponent as ArrowR } from '../../img/arrowR.svg'
import { ReactComponent as Calendar } from '../../img/calendar.svg'
import { ReactComponent as Place } from '../../img/place.svg'
import { Col, Row } from 'antd'

export const AllNews = () => {

  const data = [
    {
      title: "Открытие нового офиса. Две фотостудии, зал для йоги и бассейн. Первые впечатления участников клуба проектного офиса в Москве",
      date: "22 декабря, 2022",
    },
    {
      title: "В столичных парках собирают подарки детям из новых территорий",
      date: "22 декабря, 2022",
    },
    {
      title: "Более 100 крупнейших компаний подали свои инклюзивные практики на Всероссийский отбор на платформе «Смартека»",
      date: "22 декабря, 2022",
    },
  ]

  return (
    <section className='bg-brandBlue'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className='mb-[51px] text-white font-[700] text-[48px] leading-[52.8px] tracking-[-2%] flex items-center'>
          Все новости
          <ArrowR className="ml-[14px] mt-2" />
        </h2>

        <Row gutter={[32, 16]}>
          <Col span={12}>
            <div className='bg-white8 rounded-[37px]'>
              <img className='w-full mb-[25px]' src={newsImage} alt="news" />

              <div className='mt-[28px] pb-[35px] px-[32px]'>
                <span className='text-white50 text-[18px] font-[500] leading-[22.5px] mb-[12px] flex'>
                  22 декабря, 2022
                </span>
                <h3 className='text-white leading-[27.6px] text-[24px] font-[500]'>
                  Участники конференции «Развитие «зеленых офисов» в России» 
                  поделились секретами экологизации организаций
                </h3>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className='w-full'>
              {
                data.map((item, index) => {
                  const styles = 'mb-[20px] px-[24px] h-[154px] bg-white8 flex flex-col justify-center rounded-[33px]'
                  return (
                    <div key={index} className={styles}>
                      <span className='text-white50 text-[18px] font-[500] leading-[22.5px] mb-[12px] flex'>
                        {item.date}
                      </span>
                      <h3 className='text-white leading-[27.6px] text-[24px] font-[500]'>
                        {item.title}
                      </h3>
                    </div>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </div>

      <div className='pattern mt-[80px]'></div>
    </section>
  )
}