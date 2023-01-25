import { Row } from 'antd'
import React from 'react'
import { EventCard } from '../../EventCard'

export const EventPageOtherEvent = ({ data, slug }) => {

  return (
    <section className='py-[8rem]'>

      <span className="text-[4.8rem] text-white leading-[1] font-[700] mb-[5rem] block">
        Вам может понравиться
      </span>

      <Row gutter={[24, 16]} className="flex items-stretch">
        {
          Object.keys(data).map((item, index) => {

            return (
              item !== slug ?
                <EventCard key={index} allEventsData={data} item={item} />
                :
                null
            )

          })
        }
      </Row>
    </section>
  )
}
