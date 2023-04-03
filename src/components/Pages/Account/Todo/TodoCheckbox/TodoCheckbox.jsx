import clsx from 'clsx'
import React from 'react'
import { GoCheck } from 'react-icons/go'
import styles from './TodoCheckbox.module.scss'

export const TodoCheckbox = ({ checked, onChange }) => {
  return (
    <label className={clsx(styles.todoCheckbox, {[styles.checked]: checked})}>
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="w-0 h-0"
      />

      { checked && <GoCheck className="w-[1.5rem] h-[1.2rem]" /> }
    </label>
  )
}
