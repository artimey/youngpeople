import React from 'react'
import { Afisha } from '../../Afisha'
import { AllNews } from '../../AllNews'
import { EventsSlider } from '../../EventsSlider'
import { MyFooter } from '../../Footer'
import { Header } from '../../Header'
import { Navbar } from '../../Navbar'
import { Partners } from '../../Partners'
import { Projects } from '../../Projects'
import { SectionHeading } from '../../SectionHeading'

export const HomePage = () => {
  return (
    <div className="z-[100]">
      <Navbar />
      <Header />
      <div className="z-[99]">
        <Afisha />
      </div>
      <div id='allevents' className="z-[9999] relative -mt-[3rem] rounded-t-[3.2rem] border-t-2 border-t-white8">
        <EventsSlider heading={<SectionHeading title={'Все мероприятия'} path="/events"/>} />
      </div>
      <AllNews />
      <div className="z-[9999] relative -mt-[30px]  border-t-2 border-t-white8 rounded-t-[32px]">
        <Projects />
      </div>
      <Partners />
      <MyFooter />
    </div>
  )
}