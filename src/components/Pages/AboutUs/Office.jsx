import React from 'react'
import styles from './style.module.scss'

import image1 from '../../../img/about/DSC01650.jpg'
import image2 from '../../../img/about/DSC01646.jpg'
import { Col, Row } from 'antd'

import { ReactComponent as Mic } from '../../../img/about/mic.svg'
import { ReactComponent as Cam } from '../../../img/about/cam.svg'
import { ReactComponent as Laptop } from '../../../img/about/laptop.svg'
import { ReactComponent as People } from '../../../img/about/people.svg'
import { ReactComponent as Run } from '../../../img/about/run.svg'
import { ReactComponent as Rocks } from '../../../img/about/rocks.svg'
import { Link } from 'react-router-dom'

export const Office = () => {
  return (
    <div className={styles.office}>
      <div className={styles.officeWrapp}>
        <div className={styles.fix}>
          <img src={image1} alt="img" />
        </div>
        <div className={styles.fix}>
          <img src={image2} alt="img" />
        </div>
      </div>

      <span className={styles.officeText}>
        офис <br /> Молодежи <br /> Москвы
      </span>


      <div className={styles.container}>
        <div className={styles.content}>
          <span><Mic /> Зал для мероприятий</span>, <span><Cam />видеостудия</span>, <span><Laptop /> коворкинг</span>,
          <span><Run /> зал для тренировок и танцев</span>, <span><People /> переговорка и</span>  <span><Rocks /> контент</span> ферма — всё для работы, организации мероприятий,
          форумов, фестивалей и других событий, которые проводят общественные организации
        </div>

        <Link to={`/co-working-zones/`} className={styles.button}>
          Посмотреть пространства
        </Link>
      </div>

    </div>
  )
}
