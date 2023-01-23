import { Col, Row } from 'antd'
import React from 'react'
import styles from './style.module.scss'

export const EventPageContent = ({text}) => {
  return (
    <section className='py-[8rem]'>
      <Row gutter={[16, 16]}>
        <Col span={11}>
          <span className="text-[4.8rem] text-white leading-[1.8rem] font-[700]">О мероприятии</span>
        </Col>

        <Col span={12} className="ml-auto">
          <div dangerouslySetInnerHTML={{__html: text}} className={styles.text} />
        </Col>
      </Row>
    </section>
  )
}
