import React from 'react';
import { Link } from 'react-router-dom';
import { FieldButton } from '../../UiKit/Buttons';

import styles from './style.module.scss';

export const CtaBlock = () => {
  return (
    <div className={`${styles.blue_pattern}`}>
      <p className={styles.title}>
        Станьте ближе к молодому поколению
      </p>
      <p className={styles.subtitle}>
        Бесплатно проводите мероприятия на базе нашего пространства и пишите
        новости на платформе Молодежи Москвы, продвигая свою организацию
      </p>

      <Link to="/partners-form">
        <FieldButton>
          Стать партнером
        </FieldButton>
      </Link>
    </div>
  );
};
