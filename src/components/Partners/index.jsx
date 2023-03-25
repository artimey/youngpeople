import React from 'react';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';

import img1 from '../../img/partners/partner-1.svg';
import img2 from '../../img/partners/partner-2.svg';
import img3 from '../../img/partners/partner-3.svg';
import img4 from '../../img/partners/partner-4.svg';
import img5 from '../../img/partners/partner-5.svg';
import img6 from '../../img/partners/partner-6.svg';
import img7 from '../../img/partners/partner-7.svg';
import img8 from '../../img/partners/partner-8.svg';
import img9 from '../../img/partners/partner-9.svg';
import img10 from '../../img/partners/partner-10.svg';
import img11 from '../../img/partners/partner-11.svg';
import img12 from '../../img/partners/partner-12.svg';
import img13 from '../../img/partners/partner-13.svg';
import img14 from '../../img/partners/partner-14.svg';
import img15 from '../../img/partners/partner-15.svg';
import img16 from '../../img/partners/partner-16.svg';
import img17 from '../../img/partners/partner-17.svg';

import styles from './Partners.module.scss';


export const Partners = () => {
  const partners = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
  ];
  return (
    <section className="mt-0 md:pt-[80px] pb-[80px] bg-brandBlue">
      <ContainerLayout>
        <div className={styles.partnersWrapper}>
          {partners.map((img, idx) => (
            <img
              src={img}
              key={idx}
              className={`${styles.partner} flex align-center justify-center`}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};
