import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { coWorkingZonesData } from "../../../mockData/mockData";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { CoWorkingContent } from "./CoWorkingContent";
import { CoWorkingForm } from "./CoWorkingForm";
import { CowWorkingHeader } from "./CowWorkingHeader";

export const CoWorkingBooking = () => {
  const { zoneSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <CowWorkingHeader title={coWorkingZonesData[zoneSlug].title} />

      <section className="bg-brandBlue py-[8rem] overflow-hidden sm:overflow-visible">
        <ContainerLayout>
          <Row
            gutter={[48, 16]}
            className="sm:px-[10rem] md:px-0 items-stretch"
          >
            <Col xs={24} sm={22} md={11} className="relative">
              <CoWorkingContent
                image={coWorkingZonesData[zoneSlug].img}
                title={coWorkingZonesData[zoneSlug].title}
                text={coWorkingZonesData[zoneSlug].text}
              />
            </Col>

            <Col xs={24} sm={22} md={12} className="ml-0 md:ml-auto">
              <CoWorkingForm />
            </Col>
          </Row>
        </ContainerLayout>
      </section>
    </MainLayout>
  );
};
