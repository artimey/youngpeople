import { Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../EventsSlider/style.module.scss';
import { ReactComponent as Calendar } from '../../img/calendar.svg';
import { ReactComponent as Place } from '../../img/place.svg';

export const EventCard = ({ item, allEventsData }) => {
  return (
    // ======== ??
    <Col xs={24} sm={12} md={8} span={8}>
      <div className={styles.eventCard}>
        <div className="p-[12px] mb-[15px]">
          <div className="rounded-[3rem] h-[25rem] overflow-hidden flex justify-center items-center">
            <img className="h-full max-w-[unset]" src={allEventsData[item].img} alt="alt" />
          </div>
        </div>

        <div className="px-[24px] mb-[12.5rem]">
          <Link
            to={`/events/${allEventsData[item].slug}`}
            className={styles.eventTitle}
          >
            {allEventsData[item].title}
          </Link>

          <div className={styles.info}>
            <Calendar className="mr-[14.5px]" />
            {allEventsData[item].date}
          </div>

          <div className={styles.info}>
            <Place className="mr-[14.5px]" />
            {allEventsData[item].place}
          </div>
        </div>

        <div className={styles.org}>
          {/* <img className="" src={allEventsData[item].orgImg} alt="img" />
          <span>{allEventsData[item].org}</span> */}
          <a href="https://www.mos.ru/city/projects/studentday/" target="_blank" className="text-brandPink">Подробнее</a>
        </div>
      </div>
    </Col>
  );
};
