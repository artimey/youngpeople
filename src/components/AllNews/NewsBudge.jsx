import React from 'react'
import styles from './allNews.module.scss'

const NewsBudge = ({ item }) => {
  return (
    <div className={styles.newsBudge}>
      <span className={styles.date}>
        {item.date}
      </span>
      <h3 className={styles.title}>
        {item.title}
      </h3>
    </div>
  )
}

export default NewsBudge