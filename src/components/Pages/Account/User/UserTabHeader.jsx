import React, { useState } from 'react'
import testImg from '../../../../img/cowworkingZones/contentFarm.png'
import { ButtonPopover } from '../../../UiKit/ButtonPopover/ButtonPopover'

export const UserTabHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center w-full" >
      <div className="inline-flex items-center">
        <div className="relative rounded-full w-[8rem] h-[8rem] mr-[2rem] flex justify-center items-center overflow-hidden">
          <img className="block w-[10rem] aspect-square object-fill" src={testImg} alt="username" />
        </div>

        <span className="druk font-[700] text-[3.2rem] uppercase text-white">Привет, {"NAME"}!</span>
      </div>

      <ButtonPopover 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  )
}
