import React from 'react'
import styles from './style.module.scss'

import image1 from '../../../img/about-1.png'
import image2 from '../../../img/about-2.png'
import image3 from '../../../img/about-3.png'
import image4 from '../../../img/about-4.png'
// import image5 from '../../../img/about/image5.png'

export const AboutUsHeader = () => {
  return (
    <div className='py-[15em] relative'>
      <div className='flex justify-center items-center'>
        <h1 className={styles.heading}>О НАС</h1>
        
        <div className={styles.images}>
          <img src={image1} alt="image" />
          <img src={image2} alt="image" />
          <img src={image3} alt="image" />
          <img src={image4} alt="image" />
        </div>
      </div>
    </div>
  )
}
