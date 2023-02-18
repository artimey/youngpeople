import React, { useEffect } from 'react'
import { AllNews } from '../../AllNews'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout'
import { MainLayout } from '../../Layouts/MainLayout'
import { NewsGrid } from './NewsGrid'

export const NewsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <MainLayout>
        <div className="bg-brandBlue pt-[15rem]">
          <header>
            <ContainerLayout>
              <h1 className="uppercase text-white font-[700] text-[4rem] md:text-[7.2rem] md:leading-[7.92rem] mb-0 md:mb-[5.8rem]">Новости</h1>
            </ContainerLayout>

            <AllNews />
          </header>

          <section className='py-[8rem]'>
            <NewsGrid />
          </section>
        </div>
      </MainLayout>
    </div>
  )
}
