import React from "react";
import { certificateCardData } from "../../../UiKit";
import { FilterButton } from "../../../UiKit/Buttons";
import { CertificateCard } from "../../../UiKit/Cards/CertificateCard/CertificateCard";

export const UserContent = () => {
  return (
    <div>
      <div className="w-full h-[4.8rem] rounded-[10rem] border-t border-t-white8" />
      <div className="text-white font-[700] text-[4.8rem] leading-[4.8rem]  mb-[2.4rem]">
        Мероприятия
      </div>
      <div className="bg-brandBlue  mb-[4rem]">
        <FilterButton active className="mr-[1.2rem]">Мои мероприятия</FilterButton>
        <FilterButton  className="mr-[1.2rem]">
          Хочу сходить
        </FilterButton>
        <FilterButton className="mr-[1.2rem]">Рекомендации</FilterButton>
        {/* <FilterButton className="mr-[1.2rem]">
          Только для амбассадоров
        </FilterButton> */}
      </div>

      <div className="bg-brandBlue">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.6rem]">
          {certificateCardData.map((item) => {
            return <CertificateCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
