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
import clsx from "clsx";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <MainLayout>
        <div className="bg-brandBlue pt-[8rem]">
          <ContainerLayout>
            <AboutUsHeader />
            <Titles />
          </ContainerLayout>
          <Office />
          <TitlesTwo />
          <ProjectSlider />

          <div className={`${localStyles.pattern} mt-[80px]`}></div>

          <div className="-mt-[2rem] border-t border-t-white50 z-[1000] bg-brandBlue rounded-t-[2rem]">
            <ContainerLayout>
              <section className="py-[8rem]">
                <div className={clsx(localStyles.partnersTitle ,"druk")}>
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
