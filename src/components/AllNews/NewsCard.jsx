import React from 'react'
import styles from './allNews.module.scss'
import newsImage from '../../img/news.png'

const NewsCard = () => {
  return (
    <a href='https://www.mos.ru/news/item/117378073/' target="_blank" className='bg-white8 overflow-hidden rounded-[3.7rem] block'>
      <img className='w-full mb-[2.5rem]' src={`https://www.mos.ru/upload/newsfeed/articles/00-gl-IMG_7990(14).jpg`} alt="news" />

      <div className='mt-[2.8rem] pb-[3.5rem] px-[3.2rem]'>
        <span className={styles.date}>
          22 декабря, 2022
        </span>
        <h3 className={styles.title}>
          Узнать секреты профессии: как платформа «ВРаботе» помогает московским школьникам
        </h3>
      </div>
    </a>
  )
}

export default NewsCard