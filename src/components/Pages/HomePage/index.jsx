import React from 'react';
import { Afisha } from '../../Afisha';
import { AllNews } from '../../AllNews';
import { EventsSlider } from '../../EventsSlider';
import { MyFooter } from '../../Footer';
import { Header } from './Header';
import { Navbar } from '../../Navbar/index';
import { Partners } from '../../Partners';
import { Projects } from '../../Projects';
import { SectionHeading } from '../../SectionHeading';
import { AboutSection } from '../../AboutSection';

export const HomePage = () => {
  return (
    <div className="z-[100]">
      <Navbar />
      <Header />
      <div className="z-[99] bg-brandBlue">
        <Afisha />
      </div>
      <div
        id="allevents"
        className="z-[9999] relative -mt-[3rem] rounded-t-[3.2rem] border-t-2 border-t-white8"
      >
        <EventsSlider
          heading={<SectionHeading title={'Все мероприятия'} path="/events" />}
        />
      </div>
      <div className="z-[10000] relative -mt-[30px]">
        <AllNews />
      </div>
      <div className="z-[10001] relative -mt-[30px]  border-t-2 border-t-white8 rounded-t-[32px]">
        <AboutSection />
      </div>
      <div className="z-[10002] relative -mt-[30px]  border-t-2 border-t-white8 rounded-t-[32px]">
        <Projects />
      </div>

      <Partners />
      <MyFooter />
    </div>
  );
};
