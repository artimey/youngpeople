import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { PageHeader } from "../../UiKit/PageHeader";
import { FirstStep } from "./Forms/FirstStep";
import { SecondStep } from "./Forms/SecondStep";
import styles from "./styles.module.scss";

export const SignUpPage = () => {
  const { step } = useParams();
  console.log("step", step);
  return (
    <MainLayout isHaveFooter={false}>
      <div className={styles.pageWrapper}>
        <PageHeader
          title="aнкета&#10;регистрации"
        />
        <section>
          <ContainerLayout>
            <Row className="flex justify-center">
              <Col xs={22} sm={22} md={10}>
                {/* <FirstStep /> */}
                <SecondStep/>
              </Col>
            </Row>
          </ContainerLayout>
        </section>
      </div>
    </MainLayout>
  );
};
