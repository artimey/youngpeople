import React from 'react'
import styles from './allNews.module.scss'
import newsImage from '../../img/news.png'

const NewsCard = () => {
  return (
    <a href='https://www.mos.ru/news/item/118980073/' target="_blank" className='bg-white8  hover:bg-white16 overflow-hidden rounded-[3.7rem] block'>
      <img className='w-full mb-[2.5rem]' src={`https://www.mos.ru/upload/newsfeed/articles/00-gl-IMG_7990(14).jpg`} alt="news" />

      <div className='mt-[2.8rem] pb-[3.5rem] px-[3.2rem]'>
        <span className={styles.date}>
          21 января
        </span>
        <h3 className={styles.title}>
          Экскурсии, выставки и патриотические мероприятия: как пройдут Дни студенчества в столице
        </h3>
      </div>
    </a>
  )
}

export default NewsCard