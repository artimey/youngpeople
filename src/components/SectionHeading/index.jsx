import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

import { ReactComponent as  ArrowR} from '../../img/arrowR.svg';

export const SectionHeading = ({title, path}) => {
  return (
    <Link to={path} className={styles.heading}>
      {title}
      <ArrowR className="ml-[1.4rem] mt-[0.8rem]" />
    </Link>
  )
}
