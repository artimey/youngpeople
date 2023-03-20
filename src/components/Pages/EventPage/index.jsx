import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllEventsQuery } from '../../../app/api/events';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import { MainLayout } from '../../Layouts/MainLayout';
import { EventPageContent } from './EventPageContent';
import { EventPageHeader } from './EventPageHeader';
import { EventPageOtherEvent } from './EventPageOtherEvent';
import { EventPageSlider } from './EventPageSlider';


export const EventPage = () => {
  const [currentEvent, setCurrentEvent] = useState(null);
  const { eventSlug } = useParams();
  const { data, isLoading } = useGetAllEventsQuery();

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
                detailImg={currentEvent.detailImg}
              />
              <ContainerLayout>
                <EventPageContent text={currentEvent.html} />
              </ContainerLayout>

              {currentEvent.slidersImage && <EventPageSlider images={currentEvent.slidersImage} />}

              <ContainerLayout>
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
