import { declension } from "../../../../utils/helpers";

import heart from "../../../../img/lkButtons/redHeart.png";
import star from "../../../../img/lkButtons/star.png";
import calendar from "../../../../img/lkButtons/calendar.png";
import bell from "../../../../img/lkButtons/bell.png";
import marshmallow from "../../../../img/lkButtons/marshmallow.png";
import hit from "../../../../img/lkButtons/hit.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../app/store/slices/accountOption";
import { EVENTS_TAB, TASKS_TAB } from "../../../../utils/constants/account";
const navTypes = {
  myEvents: {
    title: "Мои мероприятия",
    icon: heart,
    link: "/account",
    declension: ["мероприятие", "мероприятия", "мероприятий"],
  },
  [EVENTS_TAB]: {
    title: "Мероприятия",
    icon: calendar,
    link: "/account",
    declension: ["предстоящие", "предстоящих", "предстоящих"],
  },
  [TASKS_TAB]: {
    title: "Задания",
    icon: hit,
    link: "/account",
    declension: ["задание", "задания", "заданий"],
  },
  certificates: {
    title: "Сертификаты",
    icon: star,
    link: "/account",
    declension: ["сертификат", "сертификата", "сертификатов"],
  },
  changeCoins: {
    title: "Обменять баллы",
    icon: marshmallow,
    link: "/account",
    declension: ["балл", "балла", "баллов"],
  },
  goals: {
    title: "Задачи",
    icon: bell,
    link: "/account",
    declension: ["задача", "задачи", "задач"],
  },
};
export const LkNavButton = ({ data }) => {
  const { type, count = null, id } = data;
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.accountOptions.activeTab);
  const handleChangeTab = () => {
    if (type !== activeTab) {
      dispatch(setActiveTab(type));
    }
  };
  if (!navTypes[type]) return "ТЫ НАПУТАЛ";

  return (
    <div
      onClick={handleChangeTab}
      className={`transition-all bg-white8 hover:bg-white16 rounded-[1.9rem] p-[2rem] min-w-fit inline-block mr-[1.6rem] last:mr-0 md:block mb-[1rem] md:last:mb-0 md:mr-0`}
    >
      <div className="flex justify-between items-center mb-[3.34rem] font-[500] text-[1.5rem] leading-[2.025rem]">
        <span className="text-white">{navTypes[type].title}</span>

        <RiArrowRightSLine className="text-white50" />
      </div>

      {count && (
        <div className="flex items-center">
          <img
            className="w-[2.3rem] mr-[0.717rem]"
            src={navTypes[type]?.icon}
            alt={`${type} icon`}
          />
          <span className="text-[1.4rem] text-white50">
            {declension(count, navTypes[type].declension)}
          </span>
        </div>
      )}
    </div>
  );
};
