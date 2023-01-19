import React from 'react'
import logs from '../../img/logos.svg'

export const Partners = () => {
  return (
    <section className='py-[80px] bg-brandBlue'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center">
        <div className='flex justify-center'>
          <img src={logs} alt="img" className='w-full' />
        </div>
      </div>
    </section>
  )
}
