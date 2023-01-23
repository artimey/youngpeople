import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout'
import styles from './style.module.scss'

import { ReactComponent as MapMarker } from '../../../img/events/mapMarker.svg'
import { ReactComponent as Calendar } from '../../../img/events/calendar.svg'

export const EventPageHeader = ({ title, date, org, orgImg, place, img }) => {
  return (
    <header className={styles.header} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.bg}></div>
      <ContainerLayout>
        {/* <div className="flex items-center">
        <img className="mr-[1.2rem] w-[4.8rem] h-[4.8rem]" src={orgImg} alt={title} />
        <span className="text-white font-[500] text-[1.6rem]">{org}</span>
        </div> */}

        <h1 className={styles.title}>{title}</h1>

        <div className='flex'>
          <div className='flex items-center mr-[2.2rem]'>
            <Calendar className='mr-[1.4rem]' width={"1.5rem"} height={"1.5rem"} />
            <span className="text-[1.6rem] font-[500] text-white">{place}</span>
          </div>

          <div className='flex items-center'>
            <MapMarker className='mr-[1.4rem]' width={"1.5rem"} height={"1.8rem"} />
            <span className="text-[1.6rem] font-[500] text-white">{place}</span>
          </div>
        </div>

      </ContainerLayout>
    </header>
  )
}
