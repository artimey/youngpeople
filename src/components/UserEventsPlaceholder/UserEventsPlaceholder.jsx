import React from 'react'
import { Link } from 'react-router-dom'
import box from '../../img/box.png'
import { FieldButton } from '../UiKit/Buttons'

export const UserEventsPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-[16rem] h-[16rem]" src={box} alt="3d box" />

      <span className="inline-block text-[2rem] leading-[2.5rem] w-full sm:w-[43.4rem] text-center text-white mb-[2rem]">
        Записывайтесь на интересные вам мероприятия, и они появятся здесь
      </span>
      
      <Link to="/events">
        <FieldButton type='bgPink'>
          Смотреть мероприятия
        </FieldButton>
      </Link>
    </div>
  )
}
