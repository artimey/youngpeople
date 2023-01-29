import { Col, Row } from 'antd';
import styles from './style.module.scss';
import logo1 from '../../img/footerlogo1.svg';
import logo2 from '../../img/footerlogo2.svg';
import youngLogo from '../../img/logo.svg';

import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout.jsx';
import { Link } from 'react-router-dom';

export const MyFooter = () => {
  const logos = [logo1, logo2, youngLogo];
  const dataMenu = [
    { title: 'Мероприятия', href: '/events' },
    { title: 'Бронь пространств', href: '/co-working-zones' },
    { title: 'О нас', href: '/about' },
    // {title: 'Проекты', href: '#'},
    // {title: 'Партнеры', href: '#'},
    // {title: 'Новости', href: '#'},
    // {title: 'Контакты', href: '#'},
  ];

  const emailData = [
    { title: 'Электронная почта', value: 'molodezh@mos.ru', link: null },
    { title: 'Телефон', value: '+7 925 063-42-70', link: null },
    {
      title: 'Адрес',
      value: 'Холодильный переулок, 3 корпус 1, стр. 8.',
      link: 'https://yandex.ru/maps/-/CCUzF0HJkD',
    },
  ];

  return (
    <footer className={`bg-brandPink w-full py-[8rem] overflow-hidden`}>
      <ContainerLayout>
        <div className={styles.footer}>
          <span className={styles.headingFooter}>Молодежь</span>
          <span className={styles.headingFooter}>москвы</span>

          <div className={styles.links}>
            <a
              href="https://vk.com/molodezh_msk"
              target="_blank"
              className={styles.linkvk}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6043 24.9173C8.44358 24.9173 2.88411 18.5615 2.66797 8H7.30763C7.45227 15.7582 10.982 19.0507 13.6878 19.7219V8H18.1357V14.6938C20.7456 14.4045 23.4758 11.3591 24.3956 8H28.7687C28.0683 12.1326 25.096 15.1781 22.9931 16.4343C25.096 17.45 28.4795 20.1086 29.7844 24.9173H24.9757C23.96 21.7029 21.4704 19.2132 18.1357 18.8752V24.9173H17.6043Z"
                  fill="white"
                />
            </svg>
            </a>

            <a
              href="https://t.me/molodezhmsk"
              target="_blank"
              className={styles.linktg}
            >
              <svg
                className="m-auto"
                width="25"
                height="21"
                viewBox="0 0 25 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.23437 8.9429C9.61953 5.59755 19.1765 1.51888 20.4957 0.954359C23.9562 -0.523185 25.018 -0.24002 24.4886 3.03212C24.1084 5.38397 23.0113 13.1704 22.1369 18.0169C21.6181 20.8909 20.454 21.2316 18.6236 19.9882C17.7433 19.3898 13.3004 16.3645 12.3361 15.6542C11.4558 15.0068 10.2418 14.2281 11.7643 12.6942C12.3061 12.1479 15.8577 8.65611 18.6248 5.9382C18.9873 5.58121 18.5319 4.99492 18.1135 5.28111C14.3839 7.82778 9.2129 11.3625 8.55477 11.823C7.56052 12.5182 6.60565 12.837 4.89157 12.33C3.59647 11.947 2.33133 11.4902 1.8389 11.3159C-0.0573338 10.6455 0.39278 9.77727 2.23437 8.9429Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          <div className={styles.logos}>
            <img src={logos[0]} alt="" />
            <svg
              width="1"
              height="32"
              viewBox="0 0 1 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="0.5"
                x2="0.499999"
                y2="31.5"
                stroke="white"
                strokeOpacity="0.16"
                strokeLinecap="round"
              />
            </svg>

            <img src={logos[1]} alt="" />
          </div>

          <div className={styles.footerMenu}>
            <span className={styles.footerMenuTitle}>Меню</span>
            {dataMenu.map((item) => {
              return (
                <div key={item.title}>
                  <Link
                    className={`${styles.footerMenuItem} mb-[13px]`}
                    to={item.href}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={styles.footerContacts}>
            {emailData.map((item) => {
              return (
                <div key={item.title} className="mb-[24px]">
                  <span className={styles.footerMenuTitle}>{item.title}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      className="block font-[500] text-[1.7rem] leading-[2.125rem] text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="block font-[500] text-[1.7rem] leading-[2.125rem] text-white">
                      {item.value}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ContainerLayout>
      {/* <ContainerLayout>
        <Row>
          <Col span={12} className="">
            <span className="headingFooter">Молодежь</span>

            <div className="flex mb-[85px]">
              <a
                href="https://vk.com/molodezh_msk"
                target="_blank"
                className="w-[120px] h-[120px] rounded-full  bg-white16 mr-[16px] flex items-center justify-items-center"
              >
                <svg
                  width="28"
                  className="m-auto"
                  height="16"
                  viewBox="0 0 28 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.56 1.08337C26.7443 0.458948 26.56 0 25.6832 0H22.7841C22.0469 0 21.7073 0.396421 21.523 0.833684C21.523 0.833684 20.0485 4.48695 17.9599 6.86C17.2842 7.54695 16.9771 7.76526 16.6085 7.76526C16.4242 7.76526 16.1575 7.54695 16.1575 6.92253V1.08337C16.1575 0.333896 15.9436 0 15.3292 0H10.7735C10.3129 0 10.0358 0.34779 10.0358 0.677474C10.0358 1.388 11.0799 1.55179 11.1876 3.55011V7.89053C11.1876 8.84211 11.0186 9.01474 10.65 9.01474C9.66723 9.01474 7.27671 5.34484 5.85863 1.1459C5.58072 0.329684 5.302 0 4.56107 0H1.66195C0.833632 0 0.667969 0.396421 0.667969 0.833684C0.667969 1.61432 1.65098 5.48632 5.24443 10.6072C7.64034 14.104 11.0153 16 14.0867 16C15.9297 16 16.1575 15.5789 16.1575 14.8537V12.2105C16.1575 11.3684 16.3321 11.2004 16.9154 11.2004C17.3457 11.2004 18.0827 11.4189 19.8029 13.1051C21.7685 15.1032 22.0924 16 23.1982 16H26.0973C26.9257 16 27.3398 15.5789 27.1008 14.748C26.8395 13.9198 25.901 12.7185 24.6557 11.2941C23.98 10.4821 22.9663 9.60779 22.6594 9.17074C22.2293 8.60863 22.3521 8.35895 22.6594 7.85958C22.6594 7.85958 26.1914 2.80084 26.56 1.08337Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a
                href="https://t.me/molodezhmsk"
                target="_blank"
                className="w-[120px] h-[120px] rounded-[35px] bg-white16 mr-[16px] flex items-center justify-items-center"
              >
                <svg
                  className="m-auto"
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.23437 8.9429C9.61953 5.59755 19.1765 1.51888 20.4957 0.954359C23.9562 -0.523185 25.018 -0.24002 24.4886 3.03212C24.1084 5.38397 23.0113 13.1704 22.1369 18.0169C21.6181 20.8909 20.454 21.2316 18.6236 19.9882C17.7433 19.3898 13.3004 16.3645 12.3361 15.6542C11.4558 15.0068 10.2418 14.2281 11.7643 12.6942C12.3061 12.1479 15.8577 8.65611 18.6248 5.9382C18.9873 5.58121 18.5319 4.99492 18.1135 5.28111C14.3839 7.82778 9.2129 11.3625 8.55477 11.823C7.56052 12.5182 6.60565 12.837 4.89157 12.33C3.59647 11.947 2.33133 11.4902 1.8389 11.3159C-0.0573338 10.6455 0.39278 9.77727 2.23437 8.9429Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

            <img src={logos} alt="img" />
          </Col>

          <Col span={24}>
            <span className="headingFooter">москвы</span>

            <Row>
              <Col span={12}></Col>
              <Col span={12}>
                {emailData.map((item) => {
                  return (
                    <div key={item.title} className="mb-[24px]">
                      <span className="footerMenuTitle">{item.title}</span>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="block font-[500] text-[1.7rem] leading-[2.125rem] text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="block font-[500] text-[1.7rem] leading-[2.125rem] text-white">
                          {item.value}
                        </span>
                      )}
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </ContainerLayout> */}
    </footer>
  );
};
