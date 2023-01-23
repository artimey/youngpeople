import React from 'react'
import styles from './style.module.scss'

import image1 from '../../../img/about/DSC01650.jpg'
import image2 from '../../../img/about/DSC01646.jpg'

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
    </div>
  )
}
