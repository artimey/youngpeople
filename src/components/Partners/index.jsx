import React from 'react';
import logs from '../../img/logos.svg';
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout';

export const Partners = () => {
  const partners = ['','','','','','','','','','','','','','','','','',];

  return (
    <section className="py-[80px] bg-brandBlue">
      <ContainerLayout>
        {/* {partners.map((partner, index) => 
          <div>
            <img src={partner} alt={partner} />
          </div>
        )} */}
        <div className="flex justify-center">
          <img src={logs} alt="img" className="w-full" />
        </div>
      </ContainerLayout>
    </section>
  );
};
