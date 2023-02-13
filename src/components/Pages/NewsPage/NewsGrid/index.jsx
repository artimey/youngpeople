import React from 'react'
import { Link } from 'react-router-dom'
import { newsData } from '../../../../mockData/mockNews'
import { newsTransformer } from '../../../../utils/transformers/news'
import ContainerLayout from '../../../Layouts/ContainerLayout/ContainerLayout'

import styles from './style.module.scss'

export const NewsGrid = () => {

  const data = newsTransformer(newsData);

  return (
    <ContainerLayout>
      <div className={styles.container}>
        {
          data.map(item => {
            return (
              <div key={item.id} className='w-[25%] p-3'>
                <Link to={`/news/${item.id}`} className="inline-block p-5 rounded-xl bg-white hover:text-brandPink">
                  {item.title}
                </Link>
              </div>
            )
          })
        }
      </div>
    </ContainerLayout>
  )
}
