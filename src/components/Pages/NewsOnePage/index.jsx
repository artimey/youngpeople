import { Col, Row } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetNewsListQuery } from '../../../app/api/news';
import useMediaQuery from '../../../app/hooks/useMatchMedia';
import { newsTransformer } from '../../../utils/transformers/news'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import { MainLayout } from '../../Layouts/MainLayout';

import styles from './style.module.scss';

export const NewsOnePage = () => {
  const match = useMediaQuery("(max-width: 425px)")
  const { data, isLoading } = useGetNewsListQuery();
  const [curNews, setIsCurNews] = useState({});
  const { newsSlug } = useParams()
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -250]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (data && !isLoading) {
      setIsCurNews(newsTransformer({ newsSlug: data?.[newsSlug] })[0]);
    }
  }, [data, isLoading])

  return (
    <MainLayout>
      <div className='bg-brandBlue py-[8rem]'>
        <ContainerLayout>

          <header className='pt-[17.7rem]'>
            <div className="flex items-center justify-center text-white50 font-[500] text-[1.7rem] sm:text-[2rem] mb-[2.5rem] leading-[2.5rem]">
              <Link to="/news" className="flex items-center hover:text-white">
                <i className="ri-arrow-left-s-line"></i>
                Ко всем новостям
              </Link>
              <span className='w-[0.6rem] h-[0.6rem] bg-white50 rounded-full mx-[1.6rem]'></span>
              {curNews.date ? <>{curNews.date.split(' ')[0]}</> : null}
            </div>

            <Row className="flex justify-center">
              <Col sm={24} md={20} className="z-[999] relative">
                <h1 className='text-center mb-[4.8rem] text-[2.8rem] leading-[3.08rem] sm:text-[4.8rem] sm:leading-[5.28rem] font-[700] text-white uppercase'>
                  {curNews.title}
                </h1>
              </Col>
              <Col sm={24} md={17}>
                {
                  match ?
                  <img className='w-full mb-[3.2rem] rounded-[3.2rem]' src={curNews.img} alt={curNews.title} />
                  :
                  <motion.img
                    style={{ y }}
                    className='w-full rounded-[3.2rem]' src={curNews.img} alt={curNews.title} 
                  />
                }
              </Col>
            </Row>
          </header>

          <section>
            <Row className="flex justify-center">
              <Col sm={24} md={12}>
                <div className={`${styles.bigText} text-[2rem] leading-[2.7rem] font-[500] text-white`} 
                dangerouslySetInnerHTML={{__html: curNews.fullNewsText}} />
              </Col>
            </Row>
          </section>

        </ContainerLayout>
      </div>
    </MainLayout>
  )
}
