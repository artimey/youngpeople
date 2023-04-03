import { declination } from "../../../../utils/constants";
import styles from "./style.module.scss";

export const CowWorkingHeader = ({ title }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      Заявка на <br /> бронирование <br /> {declination[title]}
    </h1>
    <p className={styles.subtitle}>
      После отправки формы с вами свяжется наш администратор для уточнения
      деталей
    </p>
  </header>
);
