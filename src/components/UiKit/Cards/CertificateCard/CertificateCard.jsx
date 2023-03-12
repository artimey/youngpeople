import React from 'react'
import { RiDownloadFill, RiBarChartFill } from 'react-icons/ri';
import { ClickButton } from '../../Buttons';
import styles from './CertificateCard.module.scss';

export const CertificateCard = ({ data }) => {

  const {title, org, isTestDone, certificateLink, logo, id} = data;

  return (
    <div className={styles.card}>

      <div className={styles.content}>
        <span className={styles.title}>
          {title}
        </span>

        <span className={styles.text}>
          {
            isTestDone ?
              "Сертификат доступен"
              :
              "Для получения сертификата необходимо пройти тест."
          }
        </span>
      </div>

      <div className="px-[2rem] flex flex-col mb-[2.4rem]">
        {
          isTestDone ?
            <ClickButton href={certificateLink} type="bgPink" className="justify-center">
              <RiDownloadFill className="mr-[0.934rem]" />
              Скачать сертификат
            </ClickButton>
            :
            <ClickButton href={certificateLink} type="bgBlueLight" className="justify-center">
              <RiBarChartFill className="mr-[0.85rem]" />
              Пройти тест
            </ClickButton>
        }
      </div>

      <div className={styles.org}>
        <div className={styles.img}>
          <img src={logo} alt={org} />
        </div>

        <span>{org}</span>
      </div>
    </div>
  )
}
