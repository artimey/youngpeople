import { declension } from "../../../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../app/store/slices/accountOption";
import { RiArrowRightSLine } from "react-icons/ri";
import calendar from "../../../../img/lkButtons/calendar.png";
import { EVENTS_TAB } from "../../../../utils/constants/account";
const navTypes = {
  [EVENTS_TAB]: {
    title: "Мероприятия",
    icon: calendar,
    link: "/account",
    declension: ["предстоящие", "предстоящих", "предстоящих"],
  },
};
export const EventNavButton = ({ data }) => {
  const { type, count = null, id } = data;
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.accountOptions.activeTab);
  const handleChangeTab = () => {
    if (type !== activeTab) {
      dispatch(setActiveTab(type));
    }
  };
  if (!navTypes[type]) return null;

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
