import React from 'react'
import styles from './style.module.scss'

// import image1 from '../../../img/about/image1.png'
// import image2 from '../../../img/about/image2.png'
// import image3 from '../../../img/about/image3.png'
// import image4 from '../../../img/about/image4.png'
// import image5 from '../../../img/about/image5.png'

export const AboutUsHeader = () => {
  return (
    <div className='py-[15em] relative overflow-hidden'>
      <div className='flex justify-center items-center'>
        <h1 className={styles.heading}>О НАС</h1>

        {/* <div className={styles.images}>
          <img src={image1} alt="image" />
          <img src={image2} alt="image" />
          <img src={image3} alt="image" />
          <img src={image4} alt="image" />
          <img src={image5} alt="image" />
        </div> */}
      </div>
    </div>
  )
}
