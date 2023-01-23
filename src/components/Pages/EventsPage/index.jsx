import React, { useEffect } from 'react'
import { EventsSlider } from '../../EventsSlider'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout'
import { MainLayout } from '../../Layouts/MainLayout'
import { EventsPageHeader } from './EventsPageHeader/EventsPageHeader'

export const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainLayout>
      <div className="bg-brandBlue">
        <ContainerLayout>
          <EventsPageHeader />
          <EventsSlider />
        </ContainerLayout>
      </div>
    </MainLayout>
  )
}
