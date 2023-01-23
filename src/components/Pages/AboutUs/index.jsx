import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout'
import { MainLayout } from '../../Layouts/MainLayout'
import { AboutUsHeader } from './AboutUsHeader'
import styles from '../../AllNews/allNews.module.scss'

import { ReactComponent as Titles } from '../../../img/about/title2.svg'
import { ReactComponent as Titles2 } from '../../../img/about/allTitles.svg'
import { Projects } from '../../Projects'
import { Partners } from '../../Partners'
import { Office } from './Office'

export const AboutUs = () => {
  return (
    <div children='overflow-hidden'>
    <MainLayout>
      <div className='bg-brandBlue'>
        <ContainerLayout>
          <AboutUsHeader />
          <section className='py-[8rem]'>
            <Titles className='w-full'/>
          </section>
          </ContainerLayout>

          <Office />

          <ContainerLayout>

          <section className='py-[8rem]'>
            <Titles2 className='w-full'/>
          </section>

          </ContainerLayout>
          <Projects />
        

        <div className={`${styles.pattern} mt-[80px]`}></div>

        <div className='-mt-[2rem] border-t border-t-white50 z-[1000] bg-brandBlue rounded-t-[2rem]'>
        <ContainerLayout>
          <section className='py-[8rem]'>
          <div className="ff-druk text-center font-[700] leading-[7.2rem] mb-[2rem] text-[3rem] md:text-[7.2rem] uppercase text-white">
            Ключевые <br/> партнеры
          </div>
          <Partners />
          </section>
        </ContainerLayout>
        </div>

      </div>
    </MainLayout>
    </div>
  )
}
