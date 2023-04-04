import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';
import useMediaQuery from '../../app/hooks/useMatchMedia';

import photo from '../../img/about-1.png';
import photo1 from '../../img/about-2.png';
import photo2 from '../../img/about-3.png';
import photo3 from '../../img/about-4.png';

import styles from './aboutSection.module.scss';


export const AboutSection = () => {
  const images = [photo, photo1, photo2, photo3];
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const isMobile = useMediaQuery("(max-width: 425px)")
  

  if (isTablet && !isMobile) {
    return (
      <section className="bg-brandBlue py-[8rem] max-sm:pt-[6rem] overflow-hidden flex justify-center">
       <div>
       <h2 className={`${styles.heading} mb-[4rem]`}>О нас</h2>
        <div
          className={`${styles.description} flex flex-col flex-nowrap max-sm:ml-[8rem] ml-[7rem]`}
        >
          <span className="mb-[1.6rem]">
            Наша цель – выявлять и реализовывать запросы молодого поколения
            столицы.
          </span>
          <span className="mb-[1.6rem]">
            В рамках работы ведется 10 проектов, а наши активисты регулярно
            принимают участие в организации акций и крупных событиях города
          </span>
          {/* Не понял, куда должно вести */}
          <Link to="/about" className={`${styles.link} py-[2.1rem] px-[3.2rem]`}>
            Хочу узнать больше
          </Link>
        </div>
       </div>
      </section>
    )
  }

  return (
    <section className="bg-brandBlue py-[8rem] max-sm:pt-[6rem] overflow-hidden">
      <ContainerLayout>
        <span className={styles.sideText}>Проектный офис</span>
        <Row className='row'>
          <Col xs={24} sm={24} md={12} className="max-sm:order-last">
            <div className={styles.images}>
              {images.map((v, i) => {
                return <img key={i} src={v} alt="" />;
              })}
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} className="mb-[7rem]">
            <h2 className={`${styles.heading} mb-[4rem] max-sm:mb-[2rem]`}>О нас</h2>
            <div
              className={`${styles.description} flex flex-col flex-nowrap ml-[20rem] max-sm:ml-[8rem]`}
            >
              <span className="mb-[1.6rem]">
                Наша цель – выявлять и реализовывать запросы молодого поколения
                столицы.
              </span>
              <span className="mb-[1.6rem]">
                В рамках работы ведется 10 проектов, а наши активисты регулярно
                принимают участие в организации акций и крупных событиях города
              </span>
              {/* Не понял, куда должно вести */}
              <Link to="/about" className={`${styles.link} py-[2.1rem] px-[3.2rem]`}>
                Хочу узнать больше
              </Link>
            </div>
          </Col>
        </Row>
      </ContainerLayout>
    </section>
  );
};
