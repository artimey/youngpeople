import React from 'react';
import ContainerLayout from '../../Layouts/ContainerLayout/ContainerLayout';

import localStyles from './style.module.scss';

export const TitlesTwo = () => {
  return (
    <div className="mb-0 sm:mb-[10rem]">
      <ContainerLayout>
        <div className={localStyles.top}>
          <span>Где проявить себя?</span>
          <span>— 10 проектов для активной молодежи Москвы</span>
        </div>
        <div className={localStyles.card}>
          <span>
            Ты можешь принять участие
            <br /> в наших масштабных проектах
            <br />
            или поделиться идеей своего!
          </span>
        </div>
      </ContainerLayout>
    </div>
  );
};
