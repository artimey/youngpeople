import React from 'react'
import coWorkingImg from '../../../../img/coworkingBooking/coworking.png'

export const CoWorkingContent = () => {
  return (
    <div>
      <img src={coWorkingImg} className="w-full mb-[2.4rem]" alt="img" />
      <span className="uppercase font-[700] leading-[3.68rem] mb-[1rem] block text-[3.2rem] ff-druk text-white">Коворкинг</span>
      <p className="text-white text-[1.6rem] font-[500] sm:pr-[10rem]">
        В поисках комфортного места, чтобы заняться работой или учебой, ты можешь остановиться здесь. 
        Для тебя и твоей команды здесь оборудовано рабочее место с удобным столом и компьютером
      </p>
    </div>
  )
}
