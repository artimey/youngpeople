import { useSelector } from "react-redux";
import { useGetPartnerEventsQuery } from "../../../../app/api/events";
import { FilterButton } from "../../../UiKit/Buttons";
import { TASKS_TAB, contentByTabs } from "../../../../utils/constants/account";
import { AddEventButton } from "../Org/Forms";

export const PartnerContent = () => {
  const { data, isLoading, isError } = useGetPartnerEventsQuery();
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

      <div className="bg-brandBlue">{contentByTabs[activeTab]}</div>
    </div>
  );
};
