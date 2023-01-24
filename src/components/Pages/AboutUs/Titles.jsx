import React from 'react';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';
import Message from '../../../img/mes.svg';

import styles from '../../AllNews/allNews.module.scss';
import localStyles from './style.module.scss';

export const Titles = () => {
  return (
    <div>
      <div className={localStyles.top}>
        <span>Проектный офис «Молодежь Москвы»</span>
        <span>– место твоей реализации</span>
      </div>
      <div className={localStyles.bottom}>
        <span>
          Наша цель — выявлять
          <br />и реализовывать запросы
          <br />
          молодого поколения столицы.
        </span>
        <span>
          В рамках работы ведётся 10 проектов,
          <br />а наши активисты регулярно
          <br />
          принимают участие в организации
          <br />акций и крупных событий города
        </span>
        <a href="#" className={`${localStyles.tlink}`}>
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
