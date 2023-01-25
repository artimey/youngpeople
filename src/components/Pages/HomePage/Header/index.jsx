import styles from './style.module.scss';
import headerImage from '../../../../img/header.png';
import { Col } from 'antd';
import maskImage from '../../../../img/maskHeader.png';
import clsx from 'clsx';

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
              молодёжи с 2020 года
            </p> */}

            <div className={styles.maskImage}>
              <img src={maskImage} alt="img" />
            </div>
          </div>

          <a
            href="#allevents"
            className={`${styles.button} mr-[12px] inline-block`}
          >
            Все мероприятия
          </a>

          {/* <button  className={`${styles.button}  !bg-white8 !text-white`}>
            Стать партнером
          </button> */}
        </Col>
      </div>

      <div className={styles.headerGradient}></div>

      <div className={styles.headerImage}>
        <img src={headerImage} alt="img" />
      </div>
    </header>
  );
};
