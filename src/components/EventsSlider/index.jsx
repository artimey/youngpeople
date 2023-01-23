import React from 'react'

import { Col, Row } from 'antd'
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout'
import { Link } from 'react-router-dom'
import { allEventsData } from '../../mockData/mockData'
import { EventCard } from '../EventCard'

export const EventsSlider = ({heading = null}) => {

  return (
    <section className='bg-brandBlue py-[8rem]'>
      <ContainerLayout>
        {heading ? <>{heading}</> : null}

        <Row gutter={[24, 16]} className="flex items-stretch">
          {
            Object.keys(allEventsData).map((item, idx) => {
              return (
                <EventCard key={idx} allEventsData={allEventsData} item={item} />
              )
            })
          }
        </Row>
      </ContainerLayout>
    </section>
  )
}
