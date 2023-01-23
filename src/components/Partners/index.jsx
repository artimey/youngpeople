import React from 'react'
import logs from '../../img/logos.svg'
import ContainerLayout from '../Layouts/ContainerLayout/ContainerLayout'

export const Partners = () => {
  return (
    <section className='py-[80px] bg-brandBlue'>
      <ContainerLayout>
        <div className='flex justify-center'>
          <img src={logs} alt="img" className='w-full' />
        </div>
      </ContainerLayout>
    </section>
  )
}
