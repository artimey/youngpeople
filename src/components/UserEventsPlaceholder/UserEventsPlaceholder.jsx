import React from "react";
import { Link } from "react-router-dom";
import box from "../../img/box.png";
import { FieldButton } from "../UiKit/Buttons";
// import { useDispatch } from "react-redux";
// import { setActiveTab } from "../../app/store/slices/accountOption";
// import { EVENTS_TAB } from "../../utils/constants/account";

export const UserEventsPlaceholder = ({ text }) => {
  // const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="w-[16rem] h-[16rem]" src={box} alt="3d box" />

      <span className="inline-block text-[2rem] leading-[2.5rem] w-full sm:w-[43.4rem] text-center text-white mb-[2rem]">
        {text ??
          " Записывайтесь на интересные вам мероприятия, и они появятся здесь"}
      </span>

      <Link to="/events">
        <FieldButton
          type="bgPink"
          // onClick={() => dispatch(setActiveTab(EVENTS_TAB))}
        >
          Смотреть мероприятия
        </FieldButton>
      </Link>
    </div>
  );
};
