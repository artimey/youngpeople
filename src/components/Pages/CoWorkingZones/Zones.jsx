import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import { coWorkingZonesData } from '../../../mockData/mockData'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import styles from './style.module.scss';

export const Zones = () => {
  return (
    <div className='bg-brandBlue pb-[8rem]'>
      <ContainerLayout>
        {
          Object.keys(coWorkingZonesData).map(item => {
            return (
              <Row key={item} className={styles.row}>
                <Col xs={24} sm={10}>
                  <div className="rounded-[3rem] border-t border-t-white8 h-[4rem]"></div>

                  <h3 className={styles.zoneTitle}>
                    {coWorkingZonesData[item].title}
                  </h3>
                  <p className={styles.zoneText}>
                     {coWorkingZonesData[item].text}
                  </p>

                  <div className="flex justify-center">
                    <Link to={`/co-working-zones/${coWorkingZonesData[item].slug}`} className={styles.zoneButton}>
                      Оставить заявкуна <br/> на бронь
                    </Link>
                  </div>
                </Col>
                <Col xs={22} sm={11} md={12} className="ml-auto">
                  <img src={coWorkingZonesData[item].img} className="w-full rounded-[3rem]" alt="img" />
                </Col>
              </Row>
            )
          })
        }
      </ContainerLayout>
    </div>
  )
}
