import React, { useEffect } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { CtaBlock } from "../AboutUs/CtaBlock";
import { PartnersCards } from "./PartnersCards";

export const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="pt-[15.6rem] pb-[8rem]">
        <ContainerLayout>
          <h1 className="font-[700] text-white text-[3.6rem] sm:text-[7.2rem] sm:leading-[7.92rem] mb-[5.6rem]">
            Партнеры
          </h1>

          <PartnersCards />

          <CtaBlock />
        </ContainerLayout>
      </div>
    </MainLayout>
  );
};
