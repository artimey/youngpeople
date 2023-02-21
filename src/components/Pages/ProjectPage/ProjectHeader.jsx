import React from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../../app/hooks/useMatchMedia'

export const ProjectHeader = ({ title }) => {

  const match = useMediaQuery("(max-width: 425px)")

  const Tg = () => {
    return (
      <a href="/" target="_blank" className='w-[8rem] h-[8rem] bg-white8 rounded-full flex items-center justify-center mr-[1.6rem]'>
        <svg width="2.1rem" height="1.3rem" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.202 12.688C4.33146 12.688 0.16186 7.92115 -0.000244141 0H3.4795C3.58798 5.81868 6.23527 8.28802 8.26462 8.79139V0H11.6005V5.02035C13.558 4.80339 15.6056 2.51931 16.2955 0H19.5753C19.05 3.09948 16.8208 5.38356 15.2436 6.32571C16.8208 7.08747 19.3584 9.08147 20.3371 12.688H16.7306C15.9688 10.2771 14.1016 8.4099 11.6005 8.15639V12.688H11.202Z" fill="white" />
        </svg>
      </a>

    )
  }

  const Vk = () => {
    return (
      <a href="/" target="_blank" className='w-[8rem] h-[8rem] bg-white8 rounded-full flex items-center justify-center'>
        <svg width="1.9rem" height="1.7rem" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.927 7.20742C7.46587 4.69841 14.6336 1.6394 15.623 1.21601C18.2184 0.107855 19.0147 0.320229 18.6177 2.77433C18.3325 4.53822 17.5097 10.3781 16.8539 14.0129C16.4648 16.1684 15.5917 16.4239 14.2189 15.4914C13.5587 15.0426 10.2265 12.7736 9.50328 12.2409C8.8431 11.7553 7.93258 11.1713 9.07447 10.0209C9.48081 9.61115 12.1445 6.99232 14.2198 4.95389C14.4917 4.68616 14.1502 4.24643 13.8364 4.46107C11.0392 6.37108 7.1609 9.02213 6.6673 9.36747C5.92161 9.88887 5.20546 10.128 3.9199 9.74774C2.94857 9.46049 1.99972 9.11788 1.6304 8.98719C0.20822 8.48439 0.545806 7.8332 1.927 7.20742Z" fill="white" />
        </svg>
      </a>

    )
  }

  return (
    <div className="pt-[13.2rem] py-[8rem]">
      <div className="">
        <Link to="/projects" className="flex items-center leading-[2.125rem] font-[500] text-white50 text-[1.7rem] mb-[2.1rem] hover:text-white">
          <i className="ri-arrow-left-s-line"></i>
          Ко всем проектам
        </Link>

        <div className='flex justify-between items-center'>
          <h1 className="font-[700] text-white uppercase leading-[1.1] text-[3rem] sm:text-[7.2rem]">{title}</h1>

          {
            !match && 
            <div className='flex'>
              <Tg />
              <Vk />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
