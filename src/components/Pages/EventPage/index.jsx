import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { allEventsData } from '../../../mockData/mockData';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import { MainLayout } from '../../Layouts/MainLayout';
import { EventPageContent } from './EventPageContent';
import { EventPageHeader } from './EventPageHeader';
import { EventPageOtherEvent } from './EventPageOtherEvent';

import styles from './style.module.scss';

export const EventPage = () => {
  const { eventSlug } = useParams();
  const data = allEventsData[eventSlug];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [eventSlug])

  return (
    <MainLayout>
      <div className="bg-brandBlue">
        <EventPageHeader
          title={data.title}
          date={data.date}
          org={data.org}
          orgImg={data.orgImg}
          place={data.place}
          img={data.img}
        />
        <ContainerLayout>
          <EventPageContent 
            text={data.html}
          />
          <EventPageOtherEvent 
            data={allEventsData}
            slug={eventSlug}
          />
        </ContainerLayout>
      </div>
    </MainLayout>
  )
}
