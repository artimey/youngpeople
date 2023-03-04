import React from 'react'
import { declension } from '../../../../utils/helpers'
import { Link } from 'react-router-dom'

import heart from '../../../../img/lkButtons/redHeart.png'
import star from '../../../../img/lkButtons/star.png'
import calendar from '../../../../img/lkButtons/calendar.png'
import bell from '../../../../img/lkButtons/bell.png'
import marshmallow from '../../../../img/lkButtons/marshmallow.png'
import hit from '../../../../img/lkButtons/hit.png'
import { RiArrowRightSLine } from 'react-icons/ri'

export const LkNavButton = ({ data }) => {

  const {type, count = null, id} = data;

  const navTypes = {
    "myEvents": {
      title: "Мои мероприятия",
      icon: heart,
      link: "/",
      declension: ["мероприятие", "мероприятия", "мероприятий"]
    },
    "events": {
      title: "Мероприятия",
      icon: calendar,
      link: "/",
      declension: ["предстоящие", "предстоящих", "предстоящих"]
    },
    "tasks": {
      title: "Задания",
      icon: hit,
      link: "/",
      declension: ["задание", "задания", "заданий"]
    },
    "certificates": {
      title: "Сертификаты",
      icon: star,
      link: "/",
      declension: ["сертификат", "сертификата", "сертификатов"]
    },
    "changeCoins": {
      title: "Обменять баллы",
      icon: marshmallow,
      link: "/",
      declension: ["балл", "балла", "баллов"]
    },
    "goals": {
      title: "Задачи",
      icon: bell,
      link: "/",
      declension: ["задача", "задачи", "задач"]
    },
  }

  if (!navTypes[type]) return "ТЫ НАПУТАЛ"

  return (
    <Link 
      to={navTypes[type].link}
      className="transition-all bg-white8 hover:bg-white16 rounded-[1.3rem] p-[2rem]"
    >
      <div className="flex justify-between items-center mb-[3.34rem] font-[500] text-[1.5rem] leading-[2.025rem]">
        <span className="text-white">
          {navTypes[type].title}
        </span>

        <RiArrowRightSLine className="text-white50" />
      </div>

      <div className='flex items-center'>
        <img className="w-[2.3rem] mr-[0.717rem]" src={navTypes[type]?.icon} alt={`${type} icon`} />
        <span className="text-[1.4rem] text-white50">
          {count && declension(count, navTypes[type].declension)}
        </span>
      </div>
    </Link>
  )
}
