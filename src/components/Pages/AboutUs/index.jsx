import React from "react";
import { useEffect } from "react";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { AboutUsHeader } from "./AboutUsHeader";
import localStyles from "./style.module.scss";
import { Titles } from "./Titles";
import { Partners } from "../../Partners";
import { Office } from "./Office";
import { TitlesTwo } from "./TitlesTwo";
import { CtaBlock } from "./CtaBlock";
import { ProjectSlider } from "../HomePage/ProjectSlider/ProjectSlider";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <MainLayout>
        <div className="bg-brandBlue pt-[8rem]">
          <div className="px-5 sm:px-[41px] max-sm:px-0 relative">
            <AboutUsHeader />
          </div>
          <div className="px-5 sm:px-[41px] max-sm:px-[1.25rem]">
            <Titles />
          </div>

          <Office />

          <TitlesTwo />

          <div className="z-[10002] relative -mt-[30px]  border-t-2 border-t-white8 rounded-t-[32px]">
            <ProjectSlider />
          </div>

          <div className={`${localStyles.pattern} mt-[80px]`}></div>

          <div className="-mt-[2rem] border-t border-t-white50 z-[1000] bg-brandBlue rounded-t-[2rem]">
            <ContainerLayout>
              <section className="py-[8rem]">
                <div className="druk text-center font-[700] md:leading-[100%] mb-[2rem] leading-[7.9rem] text-[4rem] sm:text-[7.2rem] uppercase text-white">
                  Ключевые <br /> партнеры
                </div>
                <Partners />
                <CtaBlock />
              </section>
            </ContainerLayout>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};
