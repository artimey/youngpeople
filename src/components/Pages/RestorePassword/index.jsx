import { Col, Row } from "antd";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { PageHeader } from "../../UiKit/PageHeader";
import { RestoreForm } from "./Forms/RestoreForm";

export const RestorePassword = () => {
  return (
    <MainLayout isHaveFooter={false}>
      <div className="h-screen flex flex-col justify-center">
        <PageHeader
          title="Восстановление&#10;пароля"
        >
          <span className="whitespace-nowrap">
            Введите свою электронную почту, которую вы указывали при
            <br /> &nbsp; регистрации, и мы вышлем на неё дальнейшие инструкции.
          </span>
        </PageHeader>
        <section className="mt-[4rem]">
          <ContainerLayout>
            <Row className="flex justify-center">
              <Col xs={22} sm={22} md={10}>
                <RestoreForm />
              </Col>
            </Row>
          </ContainerLayout>
        </section>
      </div>
    </MainLayout>
  );
};
