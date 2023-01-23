import React from 'react'
import styles from './allNews.module.scss'
import newsImage from '../../img/news.png'

const NewsCard = () => {
  return (
    <div className='bg-white8 rounded-[3.7rem]'>
      <img className='w-full mb-[2.5rem]' src={newsImage} alt="news" />

      <div className='mt-[2.8rem] pb-[3.5rem] px-[3.2rem]'>
        <span className={styles.date}>
          22 декабря, 2022
        </span>
        <h3 className={styles.title}>
          Участники конференции «Развитие «зеленых офисов» в России»
          поделились секретами экологизации организаций
        </h3>
      </div>
    </div>
  )
}

export default NewsCard