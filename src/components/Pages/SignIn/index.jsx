import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { PageHeader } from "../../UiKit/PageHeader";
import { SignInForm } from "./Forms/SignInForm";

export const SignInPage = () => {
  return (
    <MainLayout isHaveFooter={false}>
      <div className="h-screen flex flex-col justify-center mt-[7rem]">
        <PageHeader title="вход">
          <div className="text-white80 text-center font-medium text-[1.6rem] leading-[2.2rem]">
            <span className="text-[#fff]">Нет аккаунта? </span>
            &nbsp;
            <Link className="text-white50 underline" to="/sign_up/first_step">
              Зарегистрироваться
            </Link>
          </div>
        </PageHeader>
        <section>
          <ContainerLayout>
            <Row className="flex justify-center">
              <Col xs={22} sm={22} md={10}>
                <SignInForm />
              </Col>
            </Row>
          </ContainerLayout>
        </section>
      </div>
    </MainLayout>
  );
};
