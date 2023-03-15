import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllProjectsQuery } from '../../../app/api/events';
import { allEventsData } from '../../../mockData/mockData';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import { MainLayout } from '../../Layouts/MainLayout';
import { EventPageContent } from './EventPageContent';
import { EventPageHeader } from './EventPageHeader';
import { EventPageOtherEvent } from './EventPageOtherEvent';

import styles from './style.module.scss';

export const EventPage = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const { eventSlug } = useParams();
  const { data, isLoading } = useGetAllProjectsQuery();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [eventSlug])

  useEffect(() => {
    if (!isLoading && data.length) {
      setCurrentEvent(data?.find(item => item.slug === eventSlug))
    }
  }, [data, isLoading, eventSlug])

  console.log('currentEvent', currentEvent);

  return (
    <>
      {
        currentEvent &&
        (
          <MainLayout>
            <div className="bg-brandBlue">
              <EventPageHeader
                title={currentEvent.title}
                date={currentEvent.dateStart}
                org={currentEvent.org}
                orgImg={currentEvent?.orgImg}
                place={currentEvent.place}
                img={currentEvent.img}
                hasImg={currentEvent.hasImg}
              />
              <ContainerLayout>
                <EventPageContent
                  text={currentEvent.html}
                />
                <EventPageOtherEvent
                  data={data}
                  slug={eventSlug}
                />
              </ContainerLayout>
            </div>
          </MainLayout>
        )
      }
    </>
  )
}
