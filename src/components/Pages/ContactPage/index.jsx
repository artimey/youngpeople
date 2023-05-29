import ContainerLayout from "../../Layouts/ContainerLayout/ContainerLayout";
import { MainLayout } from "../../Layouts/MainLayout";
import { FieldButton } from "../../UiKit/Buttons";
import { ReactComponent as VK } from "../../../img/contacts/vkontakte.svg";
import { ReactComponent as Tg } from "../../../img/contacts/telegram.svg";
import styles from "./styles.module.scss";
import { ContactForm } from "./ContactForm";
export const ContactPage = () => {
  return (
    <div className="overflow-hidden">
      <MainLayout>
        <div className="bg-brandBlue pt-[8rem]">
          <ContainerLayout>
            <div className={styles.contactHeader}>
              <div className={styles.headerInfo}>
                <span className={styles.pageTitle}>Контакты</span>
                <div className={styles.infoFooter}>
                  <div className={styles.infoColumn}>
                    <span className={styles.title}>Электронная почта</span>
                    <span className={styles.info}>molodezh@moskvy.ru</span>
                  </div>
                  <div className={styles.infoColumn}>
                    <span className={styles.title}>Телефон</span>
                    <span className={styles.info}>+7 925 063-42-70</span>
                  </div>
                </div>
              </div>

              <div className={styles.headerLinks}>
                <FieldButton
                  type="bg8"
                  view={true}
                  icon={<VK />}
                  className={styles.linkBtnVk}
                />
                <FieldButton
                  type="bg8"
                  view={true}
                  icon={<Tg />}
                  className={styles.linkBtnTg}
                />
              </div>
            </div>
          </ContainerLayout>

          <div className={`${styles.pattern} mt-[80px]`}></div>

          <ContainerLayout>{/* СЮда вставь  степпер */}</ContainerLayout>
          <ContainerLayout>
            <div className={styles.contactFormWrapper}>
              <div className={styles.contactHint}>
                <span className={styles.pageTitle}>
                  Пишите
                  <br /> нам
                </span>
                <span className={styles.hint}>
                  Задайте вопрос, предложите
                  <br /> инициативу или сообщите о проблеме
                </span>
              </div>
              <div className={styles.contactForm}>
                <ContactForm />
              </div>
            </div>
          </ContainerLayout>
        </div>
      </MainLayout>
    </div>
  );
};
