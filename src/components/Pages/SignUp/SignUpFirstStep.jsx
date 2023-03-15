import { Col, Row } from "antd";
import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { PageHeader } from "../../UiKit/PageHeader";
import { FirstStep } from "./Forms/FirstStep";
import styles from "./styles.module.scss";

export const SignUpFirstStep = () => {
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
                <FirstStep />
              </Col>
            </Row>
          </ContainerLayout>
        </section>
      </div>
    </MainLayout>
  );
};
