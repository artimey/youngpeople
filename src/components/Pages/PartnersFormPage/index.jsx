import React, { useEffect } from "react";
import { Col, Row } from "antd";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { PartnersFormHeader } from "./PartnersFormHeader";
import { PartnersForm } from "./PartnersForm";

export const PartnersFormPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <MainLayout>
      <PartnersFormHeader />
      <section className="bg-brandBlue py-[8rem] overflow-hidden">
        <ContainerLayout>
          <Row  className="flex justify-center">
            <Col xs={22} sm={22} md={10} >
              <PartnersForm/>
            </Col>
          </Row>
        </ContainerLayout>
      </section>
    </MainLayout>
  );
};
