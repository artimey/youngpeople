import ContainerLayout from "../ContainerLayout/ContainerLayout";
import { MainLayout } from "../MainLayout";
import styles from "./style.module.scss";

export const AccountLayout = ({ tabs, tabHeader, content }) => {
  return (
    <MainLayout>
      <ContainerLayout>
        <div className="flex flex-col md:flex-row py-[13rem]">
          <div className={styles.sidebar}>{tabs}</div>
          <div className="w-full">
            <div>{tabHeader}</div>

            <div>{content}</div>
          </div>
        </div>
      </ContainerLayout>
    </MainLayout>
  );
};
