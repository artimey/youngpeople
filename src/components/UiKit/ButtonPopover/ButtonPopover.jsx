import { Modal } from 'antd'
import React from 'react'
import { RiCloseFill, RiEdit2Fill } from 'react-icons/ri'
import './ButtonPopover.scss'

export const ButtonPopover = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white rounded-full 
            bg-white8 ml-auto w-[4.8rem] h-[4.8rem] flex justify-center items-center text-[1.7rem] hover:bg-white16"
      >
        <RiEdit2Fill />
      </button>

      <Modal
        className="editProfileModal"
        width="100%"
        centered
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        closable={false}
        okButtonProps={{className: "hidden"}}
        cancelButtonProps={{className: "hidden"}}
      >

        <button 
          onClick={() => setIsModalOpen(false)}
          className="bg-white rounded-full w-[4.8rem] h-[4.8rem] hover:bg-white16 hidden
          bg-white8 text-[2rem] sm:flex items-center justify-center text-white absolute top-0 -right-[6.4rem]">
          <RiCloseFill />
        </button>

        <p>ВОТ ЗДЕСЬ ЗАКИНЬ ФОРМУ</p>
        <p>ВОТ ЗДЕСЬ ЗАКИНЬ ФОРМУ</p>
        <p>ВОТ ЗДЕСЬ ЗАКИНЬ ФОРМУ</p>
      </Modal>
    </>
  )
}
