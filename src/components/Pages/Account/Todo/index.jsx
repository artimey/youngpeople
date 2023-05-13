// import { Checkbox } from 'antd'
import { useState } from "react";
import { tData } from "../../../../mockData/todoData";
import useMediaQuery from "../../../../app/hooks/useMatchMedia";
import { Modal } from "antd";
import { RiCloseFill } from "react-icons/ri";
import { TodoMobile } from "./TodoMobile/TodoMobile";
import { TodoDesktop } from "./TodoDesktop/TodoDesktop";
import { TodoModal } from "./TodoModal/TodoModal";

import styles from "./index.module.scss";

export const Todo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const isMobile = useMediaQuery("(max-width: 766px)");

  const openEditTodoPopup = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        {isMobile ? (
          <TodoMobile data={tData} openEditTodoPopup={openEditTodoPopup} />
        ) : (
          <TodoDesktop data={tData} openEditTodoPopup={openEditTodoPopup} />
        )}
      </div>

      {isModalOpen && (
        <Modal
          destroyOnClose
          className={styles.editTaskModal}
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
            <TodoModal data={modalData} />
          </div>
        </Modal>
      )}
    </>
  );
};
