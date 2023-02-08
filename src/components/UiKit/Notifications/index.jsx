import React from 'react'
import { ReactComponent as Success } from '../../../img/success.svg'
import { ReactComponent as Warning } from '../../../img/warning.svg'

export const Notifications = ({children, type, close}) => {
  return (
    <div className="bg-brandBlue px-[2.1rem] py-[2.2rem] border border-white8 w-[28.6rem] rounded-[2rem]">
      <div className="flex items-start">
        {
          type === 'success' ? 
          <Success className="mr-[1.3rem] mt-1" width="1.7rem" height="1.7rem"/>
          :
          <Warning className="mr-[1.3rem] mt-1" width="1.7rem" height="1.7rem"/>
        }
        <span className="text-[1.6rem] leading-[2.18rem] text-white font-[500]">{children}</span>
        <i onClick={close} className="ri-close-fill text-white text-[1.6rem] cursor-pointer ml-auto"></i>
      </div>
    </div>
  )
}
