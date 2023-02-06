import React from 'react'
import coWorkingImg from '../../../../img/coworkingBooking/coworking.png'

export const CoWorkingContent = ({text, title, image}) => {
  return (
    <div className="sticky top-7">
      <img src={image} className="w-full rounded-[3rem] mb-[2.4rem]" alt="img" />
      <span className="uppercase font-[700] leading-[3.68rem] mb-[1rem] block text-[3.2rem] ff-druk text-white">
        {title}
      </span>
      <p className="text-white text-[1.6rem] font-[500] sm:pr-[10rem]">
        {text}
      </p>
    </div>
  )
}
