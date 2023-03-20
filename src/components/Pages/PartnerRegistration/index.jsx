import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { PageHeader } from "../../UiKit/PageHeader";
import { PartnersRegistrationForm } from "./Forms/PartnersRegistrationForm";
import styles from "./styles.module.scss";

export const PartnerRegistration = () => {
  return (
    <MainLayout isHaveFooter={false}>
      <div className={styles.pageWrapper}>
        <PageHeader title={`Анкета\nрегистрации`} />
        <div className="text-white80 text-center font-medium text-[1.6rem] leading-[2.2rem] mb-[1rem]">
          <span className="text-[#fff]">Уже есть аккаунт? </span>
          &nbsp;
          <Link className="text-white50 underline" to="/sign_in">
            Войти
          </Link>
        </div>
        <section>
          <ContainerLayout>
            <Row className="flex justify-center">
              <Col xs={22} sm={22} md={10}>
                <PartnersRegistrationForm />
              </Col>
            </Row>
          </ContainerLayout>
        </section>
      </div>
    </MainLayout>
  );
};
