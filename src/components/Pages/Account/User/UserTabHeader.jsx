import React, { useState } from "react";
import { useSelector } from "react-redux";
import testImg from "../../../../img/cowworkingZones/contentFarm.png";
import { ButtonPopover } from "../../../UiKit/ButtonPopover/ButtonPopover";
import { UpdateForm } from "./Forms/UpdateForm";
import { DefaultAvatar } from "../../../UiKit/DefaultAvatar";

export const UserTabHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { person } = useSelector((s) => s);
  return (
    <div className="flex items-center w-full mb-[3.2rem]">
      <div className="inline-flex items-center">
        <div className="relative rounded-full w-[8rem] h-[8rem] mr-[2rem] flex justify-center items-center overflow-hidden">
          {person.avatar ? (
            <img
              className="block w-[10rem] aspect-square object-fill"
              src={person.avatar}
              alt="username"
            />
          ) : (
            <DefaultAvatar />
          )}
        </div>

        <span className="druk font-[700] text-[3.2rem] leading-[3.2rem] uppercase text-white">
          Привет, {`${person ? person.initials : ""}`}!
        </span>
      </div>

      <ButtonPopover isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <UpdateForm />
      </ButtonPopover>
    </div>
  );
};
