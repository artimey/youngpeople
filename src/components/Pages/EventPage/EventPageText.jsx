import React, { useState } from 'react'
import styles from './style.module.scss'

export const EventPageText = ({ text }) => {

  const [isShowText, setIsShowText] = useState(false);

  return (
    <>
      {
        text.length > 546 ?
          <div>
            <div className={`${isShowText ? "h-auto" : "h-[19.6rem] overflow-hidden relative"}`}>
              <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: text === "" ? "Описание отсутствует" : text }}
              />
              {!isShowText && <div className={styles.gradient} />}
            </div>

            <button
              onClick={() => setIsShowText(prev => !prev)}
              className={styles.openTextBtn}
            >
              {
                !isShowText ?
                  "Читать далее"
                  :
                  "Скрыть"
              }
            </button>
          </div>
          :
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text === "" ? "Описание отсутствует" : text }}
          />
      }
    </>
  )
}
