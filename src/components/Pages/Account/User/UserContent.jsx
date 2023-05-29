import { useSelector } from "react-redux";
import { FilterButton } from "../../../UiKit/Buttons";
import { AddEventButton } from "../Org/Forms";
import { TASKS_TAB, contentByTabs, userContentByTabs } from "../../../../utils/constants/account";

export const UserContent = () => {
  const { activeTab } = useSelector((s) => s.accountOptions);
  return (
    <div>
      {activeTab !== TASKS_TAB && (
        <>
          <div className="w-full h-[4.8rem] rounded-[10rem] border-t border-t-white8" />
          <div className="text-white font-[700] text-[4.8rem] leading-[4.8rem]  mb-[2.4rem]">
            Мероприятия
          </div>
          <div className="flex bg-brandBlue mb-[4rem]">
            <div className="flex flex-1">
              <FilterButton active className="mr-[1.2rem]">
                Мои мероприятия
              </FilterButton>
              {/* <FilterButton className="mr-[1.2rem]">Хочу сходить</FilterButton>
              <FilterButton className="mr-[1.2rem]">Рекомендации</FilterButton> */}
            </div>
            <AddEventButton />
          </div>
        </>
      )}

      <div className="bg-brandBlue">{userContentByTabs[activeTab]}</div>
    </div>
  );
};
