import React from 'react';
import styles from './aboutSection.module.scss';
import photo from '../../img/about-1.png';
import photo1 from '../../img/about-2.png';
import photo2 from '../../img/about-3.png';
import photo3 from '../../img/about-4.png';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';

import { Col, Row } from 'antd';

export const AboutSection = () => {
  const images = [photo, photo1, photo2, photo3];
  return (
    <section className="bg-brandBlue py-[8rem] max-sm:pt-[6rem]">
      <ContainerLayout>
        <span className={styles.sideText}>Проектный офис</span>
        <Row className='row'>
          <Col span={12} xs={24} sm={24} md={12} className="max-sm:order-last">
            <div className={styles.images}>
              {images.map((v, i) => {
                return <img src={v} alt="" />;
              })}
            </div>
          </Col>
          <Col span={12} xs={24} sm={24} md={12} className="mb-[7rem]">
            <h2 className={`${styles.heading} mb-[4rem] max-sm:mb-[2rem]`}>О нас</h2>
            <div
              className={`${styles.description} flex flex-col flex-nowrap ml-[20rem] max-sm:ml-[8rem]`}
            >
              <span className="mb-[1.6rem]">
                Наша цель – выявлять и реализовывать запросы молодого поколения
                столицы.
              </span>
              <span className="mb-[1.6rem]">
                В рамках работы ведется 10 проектов, а наши активисты регулярно
                принимают участие в организации акций и крупных событий города
              </span>
              {/* Не понял, куда должно вести */}
              <a href="#" className={`${styles.link} py-[2.1rem] px-[3.2rem]`}>
                Хочу узнать больше
              </a>
            </div>
          </Col>
        </Row>
      </ContainerLayout>
    </section>
  );
};
