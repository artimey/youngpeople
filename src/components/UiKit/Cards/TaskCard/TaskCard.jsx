import clsx from 'clsx';
import React from 'react'

import {ReactComponent as ManWalk} from '../../../../img/taskCards/manWalk.svg';
import {ReactComponent as Graph} from '../../../../img/taskCards/graph.svg';

import purpleSvg from '../../../../img/taskCards/purple.svg';
import redSvg from '../../../../img/taskCards/red.svg';
import pinkSvg from '../../../../img/taskCards/pink.svg';
import blueSvg from '../../../../img/taskCards/blue.svg';
import orangeSvg from '../../../../img/taskCards/orange.svg';
import coinImg from '../../../../img/Marshmallow.png';

import styles from './TaskCard.module.scss'
import { ClickButton } from '../../Buttons';
import { declension } from '../../../../utils/helpers';

export const TaskCard = ({ data }) => {
  const {coinsPrice, task, type, isDone, id} = data

  const cardTypes = {
    "purple": {
      bg: "bg-gradient-to-b from-[#7445E5] to-[#835CE5]",
      image: purpleSvg
    },
    "red": {
      bg: "bg-gradient-to-b from-[#E54557] via-[#E55E6D] to-[#E55C6B]",
      image: redSvg
    },
    "pink": {
      bg: "bg-gradient-to-b from-[#E52EE5] to-[#E545E5]",
      image: pinkSvg
    },
    "orange": {
      bg: "bg-gradient-to-b from-[#E55A2E] via-[#E06F4C] to-[#E56A45]",
      image: orangeSvg
    },
    "blue": {
      bg: "bg-gradient-to-b from-[#4570E5] to-[#5C81E5]",
      image: blueSvg
    },
  }

  return (
    <div className={`${styles.card} ${cardTypes?.[type]?.bg || "bg-gradient-to-r from-[#7445E5] to-[#835CE5]"}`}>

      <div 
        className="w-full h-full absolute top-0 left-0 -z-[1] bg-cover" 
        style={{backgroundImage: `url(${cardTypes?.[type]?.image || purpleSvg})`}} 
      />

      <div className={styles.header}>
        <img src={coinImg} alt="Marshmallow coin" />
        {declension(coinsPrice, ["балл", "балла", "баллов"])} 
      </div>

      <div className="px-[2.1rem] pb-[2.1rem]">
        <span className={styles.title}>
          {task}
        </span>

        <div className="flex flex-col">
          {
            isDone ?
              <ClickButton type='bg16' className="justify-center">
                <Graph width="1.5rem" height="1.583rem" className="mr-[1rem]" />
                К мероприятию
              </ClickButton>
              :
              <ClickButton type='bg16' className="justify-center">
                <ManWalk width="1.146rem" height="1.786rem" className="mr-[1rem]" />
                Пройти тест
              </ClickButton>
          }
        </div>
      </div>

    </div>
  )
}
