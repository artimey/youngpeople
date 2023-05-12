import { useRef, useState } from "react";
import { ButtonPopover } from "../../../../UiKit/ButtonPopover/ButtonPopover";
import { AddEventForm } from "./AddEventForm";
import { ClickButton } from "../../../../UiKit/Buttons";

export const AddEventButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <ButtonPopover
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      openModalBtn={
        <ClickButton onClick={handleOpen}>
          + Добавить мероприятие
        </ClickButton>
      }
    >
      <AddEventForm />
    </ButtonPopover>
  );
};
