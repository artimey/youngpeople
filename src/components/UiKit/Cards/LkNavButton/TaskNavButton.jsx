import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../../app/store/slices/accountOption";
import { RiArrowRightSLine } from "react-icons/ri";
import { declension } from "../../../../utils/helpers";
import hit from "../../../../img/lkButtons/hit.png";
import { TASKS_TAB } from "../../../../utils/constants/account";
import { useGetTasksQuery } from "../../../../app/api/tasks";
import { ORG_GROUP_NUMBER } from "../../../../utils/constants/person";
const navTypes = {
  [TASKS_TAB]: {
    title: "Задания",
    icon: hit,
    link: "/account",
    declension: ["задание", "задания", "заданий"],
  },
};
export const TaskNavButton = ({ data }) => {
  const person = useSelector((s) => s.person);
//   const { data: fetchData, isLoading, isError } = useGetTasksQuery();
  const { type, count = null, id } = data;
  const dispatch = useDispatch();
  const activeTab = useSelector((s) => s.accountOptions.activeTab);
  const handleChangeTab = () => {
    if (type !== activeTab) {
      dispatch(setActiveTab(type));
    }
  };
  if (!navTypes[type]) return null;
  if (person?.userGroups !== ORG_GROUP_NUMBER) {
    return null;
  }
  return (
    <div
      onClick={handleChangeTab}
      className={`transition-all bg-white8 hover:bg-white16 rounded-[1.9rem] p-[2rem] min-w-fit inline-block mr-[1.6rem] last:mr-0 md:block mb-[1rem] md:last:mb-0 md:mr-0`}
    >
      <div className="flex justify-between items-center mb-[3.34rem] font-[500] text-[1.5rem] leading-[2.025rem]">
        <span className="text-white">{navTypes[type].title}</span>

        <RiArrowRightSLine className="text-white50" />
      </div>

      {/* {fetchData?.tasks && (
        <div className="flex items-center">
          <img
            className="w-[2.3rem] mr-[0.717rem]"
            src={navTypes[type]?.icon}
            alt={`${type} icon`}
          />
          <span className="text-[1.4rem] text-white50">
            {declension(
              Object.values(fetchData?.tasks).length,
              navTypes[type].declension
            )}
          </span>
        </div>
      )} */}
    </div>
  );
};
