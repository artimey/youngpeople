import { Modal } from "antd";
import React, { cloneElement } from "react";
import { RiCloseFill, RiEdit2Fill } from "react-icons/ri";
import "./ButtonPopover.scss";

export const ButtonPopover = ({ isModalOpen, setIsModalOpen, children,openModalBtn = null }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOpen = ()=>{
    setIsModalOpen(true)
  }
  return (
    <>
      {
        !openModalBtn ?
          <button
            onClick={handleOpen}
            className="text-white rounded-full 
            bg-white8 ml-auto min-w-[4.8rem] min-h-[4.8rem] flex justify-center items-center text-[1.7rem] hover:bg-white16"
          >
            <RiEdit2Fill />
          </button>
          :
          <>
            {openModalBtn}
          </>
      }



      {isModalOpen && (
        <Modal
          destroyOnClose
          className="editProfileModal"
          width="100%"
          centered
          open={isModalOpen}
          onCancel={handleClose}
          closable={false}
          okButtonProps={{ className: "hidden" }}
          cancelButtonProps={{ className: "hidden" }}
        >
          <button
            onClick={handleClose}
            className="bg-white rounded-full w-[4.8rem] h-[4.8rem] hover:bg-white16 hidden
          bg-white8 text-[2rem] sm:flex items-center justify-center text-white absolute top-0 -right-[6.4rem]"
          >
            <RiCloseFill />
          </button>
          <div className="modalContentWrapper">
            {cloneElement(children, { onClose: handleClose })}
          </div>
        </Modal>
      )}
    </>
  );
};
