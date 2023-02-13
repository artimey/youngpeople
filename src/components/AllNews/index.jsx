import React, { useEffect } from 'react';
import styles from './allNews.module.scss';

import { ReactComponent as ArrowR } from '../../img/arrowR.svg';
import { ReactComponent as Calendar } from '../../img/calendar.svg';
import { ReactComponent as Place } from '../../img/place.svg';
import { Col, Row } from 'antd';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';
import NewsCard from './NewsCard';
import NewsBudge from './NewsBudge';

export const AllNews = ({ heading = null, pattern=false }) => {
  const data = [
    {
      title: 'Интересные стажировки и трудоустройство в крупные компании: итоги работы проектного офиса «Молодежь Москвы»      ',
      date: '4 января',
      link: 'https://www.mos.ru/news/item/117969073/  '
    },
    {
      title:
        `
        Москвичи выиграли денежные гранты в ходе Всероссийской молодежной форумной кампании
        `,
      date: '27 декабря, 2022',
      link: "https://www.mos.ru/news/item/118065073/",
    },
    {
      title:
        'Узнать секреты профессии: как платформа «ВРаботе» помогает московским школьникам',
      date: '22 декабря, 2022',
      link: 'https://www.mos.ru/news/item/117378073/ '
    },
  ];

  return (
    <section className="bg-brandBlue max-sm:pt-[6rem]">
      <ContainerLayout>
        {heading}

        <Row gutter={[32, 16]}>
          <Col span={12} xs={24} sm={24} md={12}>
            <NewsCard />
          </Col>
          <Col span={12} xs={24} sm={24} md={12}>
            <div className="w-full h-full flex flex-col flex-nowrap flex-justify-between gap-y-[1.6rem]">
              {data.map((item, index) => {
                return <NewsBudge key={index} item={item} />;
              })}
            </div>
          </Col>
        </Row>
      </ContainerLayout>

      {
        pattern ?
        <div className={`${styles.pattern} mt-[80px]`}></div>
        :
        null
      }
    </section>
  );
};
