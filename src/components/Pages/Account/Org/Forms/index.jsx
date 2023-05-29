import { useCallback, useState } from "react";
import { ButtonPopover } from "../../../../UiKit/ButtonPopover/ButtonPopover";
import { AddEventForm } from "./AddEventForm";
import { ClickButton } from "../../../../UiKit/Buttons";
import { useSelector } from "react-redux";
import { ORG_GROUP_NUMBER } from "../../../../../utils/constants/person";
import { useEffect } from "react";

export const AddEventButton = () => {
  const person = useSelector((s) => s.person);
  const [isAccess, setIsAccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  useEffect(() => {
    if (person?.userGroups === ORG_GROUP_NUMBER) {
      setIsAccess(true);
    }
  }, [person]);
  return (
    <>
      {isAccess ? (
        <ButtonPopover
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          openModalBtn={
            <ClickButton
              className="py-[1.15rem]"
              type="bg16"
              onClick={handleOpen}
            >
              + Добавить мероприятие
            </ClickButton>
          }
        >
          <AddEventForm onClose={handleClose} />
        </ButtonPopover>
      ) : null}
    </>
  );
};
