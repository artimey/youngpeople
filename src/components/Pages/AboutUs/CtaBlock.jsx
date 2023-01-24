import React from 'react';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';

import localStyles from './style.module.scss';

export const CtaBlock = () => {
  return (
    <div className={`${localStyles.blue_pattern}`}>
      <p className={localStyles.title}>
        Станьте
        <br />
        ближе к
        <br />
        молодому
        <br /> 
        поколению
      </p>
      <p className={localStyles.subtitle}>
        Бесплатно проводите мероприятия на базе нашего пространства и пишите
        новости на платформе Молодёжи Москвы, продвигая свою организацию
      </p>
    </div>
  );
};
