import React, { useEffect } from 'react';
import styles from './allNews.module.scss';

import { ReactComponent as ArrowR } from '../../img/arrowR.svg';
import { ReactComponent as Calendar } from '../../img/calendar.svg';
import { ReactComponent as Place } from '../../img/place.svg';
import { Col, Row } from 'antd';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';
import NewsCard from './NewsCard';
import NewsBudge from './NewsBudge';

export const AllNews = () => {
  const data = [
    {
      title:
        `
        Москвичи выиграли денежные гранты в ходе Всероссийской молодежной форумной кампании
        `,
      date: '27 декабря, 2022',
      link: "https://www.mos.ru/news/item/118065073/",
    },
    {
      title: 'Интересные стажировки и трудоустройство в крупные компании: итоги работы проектного офиса «Молодежь Москвы»      ',
      date: '4 января',
      link: 'https://www.mos.ru/news/item/117969073/  '
    },
    {
      title:
        'Экскурсии, выставки и патриотические мероприятия: как пройдут Дни студенчества в столице',
      date: '21 января',
      link: 'https://www.mos.ru/news/item/118980073/'
    },
  ];

  return (
    <section className="bg-brandBlue max-sm:pt-[6rem]">
      <ContainerLayout>
        <h2 className="heading">
          Все новости
          <ArrowR
            className="ml-[1.4rem] mt-[0.8rem]"
          />
        </h2>

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

      <div className={`${styles.pattern} mt-[80px]`}></div>
    </section>
  );
};
