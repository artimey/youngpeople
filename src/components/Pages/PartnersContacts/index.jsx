import { useEffect } from "react";
import { MainLayout } from "../../Layouts/MainLayout";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { Col, Row } from "antd";
import { PartnerContactHeader } from "./PartnerContactHeader";
import { PartnerContactForm } from "./PartnerContactForm";


export const PartnersContacts = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <PartnerContactHeader />
      <section className="bg-brandBlue py-[8rem] overflow-hidden">
        <ContainerLayout>
          <Row className="flex justify-center">
            <Col xs={22} sm={22} md={10}>
              <PartnerContactForm />
            </Col>
          </Row>
        </ContainerLayout>
      </section>
    </MainLayout>
  );
};
