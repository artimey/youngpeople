import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout'
import styles from './style.module.scss'

import { ReactComponent as Clock } from '../../../img/cowworkingZones/clock.svg'
import { ReactComponent as Place } from '../../../img/cowworkingZones/place.svg'

export const CoWorkingZonesHeader = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <header className={styles.header}>
      <ContainerLayout>
        <div>
          <div>
            <h1 className={styles.heading}>
              Пространства <br /> Молодежи <br /> Москвы
            </h1>

            <div className='flex items-start'>
              <span className={styles.subtitle}>
                Здесь вы можете выбрать подходящее пространство и оставить заявку на его бронирование
              </span>

              <div className={styles.headerCard}>
                <span><Clock /> Каждый день с 10:00 до 20:00</span>
                <span><Place /> <span>Холодильный переулок, 3 корпус 1, стр. 8. <a href="https://yandex.ru/maps/-/CCUzF0HJkD" target="_blank">Как добраться</a></span></span>
              </div>
            </div>

          </div>
        </div>
      </ContainerLayout>
    </header>
  )
}
