import { Col, Row } from 'antd'
import React from 'react'
import styles from './style.module.scss'

export const EventPageContent = ({ text }) => {
  return (
    <section className='py-[7rem] pb-0 sm:py-[8rem]'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={11}>
          <span className="text-[4.8rem] text-white leading-[1.8rem] font-[700] mb-14 block sm:mb-0">О мероприятии</span>
        </Col>

        <Col xs={24} sm={12} className="ml-auto">
          <div dangerouslySetInnerHTML={{__html: text === "" ? "Описание отсутствует" : text }} className={styles.text} />
        </Col>
      </Row>
    </section>
  )
}
