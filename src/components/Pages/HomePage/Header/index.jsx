import styles from './style.module.scss';
import headerImage from '../../../../img/header.png';
import { Col } from 'antd';
import maskImage from '../../../../img/maskHeader.png';
import clsx from 'clsx';
import { FieldButton } from '../../../UiKit/Buttons';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header className={clsx(styles.header)}>
      <div className="px-5 sm:px-[41px] relative">
        <Col span={12}>
          <div className="relative">
            <h1 className={styles.headerTitle}>Молодежь Москвы</h1>

            {/* <p className={styles.subtitle}>
              Мы — команда молодых инициативных ребят, меняющая жизнь к лучшему.
              Запускаем амбициозные проекты и организуем мероприятия для
              молодежи с 2020 года
            </p> */}

            <div className={styles.maskImage}>
              <img src={maskImage} alt="img" />
            </div>
          </div>

          <Link
            to="/events"
          >
            <FieldButton className='mb-[1.2rem] sm:mb-0 mr-[1.2rem]'> Все мероприятия</FieldButton>
          </Link>

          <Link to="/partners-form">
            <FieldButton type='bg8'> Стать партнером</FieldButton>
          </Link>
        </Col>
      </div>

      <div className={styles.headerGradient}></div>

      <div className={styles.headerImage}>
        <img src={headerImage} alt="img" />
      </div>
    </header>
  );
};
