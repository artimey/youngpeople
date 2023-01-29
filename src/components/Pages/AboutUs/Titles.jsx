import React from 'react';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import Message from '../../../img/mes.svg';

import styles from '../../AllNews/allNews.module.scss';
import localStyles from './style.module.scss';

export const Titles = () => {
  return (
    <div className={`${localStyles.temporary}`}>
      <div className={localStyles.top}>
        <span>Проектный офис «Молодежь Москвы»</span>
        <span>– место твоей реализации</span>
      </div>
      <div className={localStyles.bottom}>
        <span className='w-[23rem] md:w-[23rem]'>
          Наша цель — выявлять
          и реализовывать запросы
          молодого поколения столицы.
        </span>
        <span className='w-[22rem] md:w-[26rem]'>
          В рамках работы ведется 10 проектов,
          а наши активисты регулярно
          принимают участие в организации
          акций и крупных событий города
        </span>
        <a
          href="https://www.mos.ru/kos/function/rabota-s-molodezhyu/proektnyi-ofis/"
          target="_blank"
          className={`${localStyles.tlink}`}
        >
          <img src={Message} alt="" />
          <span className="text-center">
            Читать о нас
            <br />
            на Mos.ru
          </span>
        </a>
      </div>
    </div>
  );
};
