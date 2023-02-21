import React from 'react';
import { useEffect } from 'react';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import { MainLayout } from '../../Layouts/MainLayout';
import { AboutUsHeader } from './AboutUsHeader';
import localStyles from './style.module.scss';
import styles from '../../AllNews/allNews.module.scss';

import { Titles } from './Titles';
import { Projects } from '../../Projects';
import { Partners } from '../../Partners';
import { Office } from './Office';
import { TitlesTwo } from './TitlesTwo';
import { CtaBlock } from './CtaBlock';



export const AboutUs = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="overflow-hidden">
      <MainLayout>
        <div className="bg-brandBlue pt-[8rem]">
          <div className="px-5 sm:px-[41px] max-sm:px-0 relative">
            <AboutUsHeader />
          </div>
          <div className="px-5 sm:px-[41px] max-sm:px-[1.25rem]">
            <Titles />
          </div>

          <Office />

          <TitlesTwo />

          <Projects />

          <div className={`${localStyles.pattern} mt-[80px]`}></div>

          <div className="-mt-[2rem] border-t border-t-white50 z-[1000] bg-brandBlue rounded-t-[2rem]">
            <ContainerLayout>
              <section className="py-[8rem]">
                <div className="durk text-center font-[700] md:leading-[100%] mb-[2rem] leading-1 text-[4rem] sm:text-[7.2rem] uppercase text-white">
                  Ключевые <br /> партнеры
                </div>
                <Partners />
                <CtaBlock />
              </section>
            </ContainerLayout>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};
