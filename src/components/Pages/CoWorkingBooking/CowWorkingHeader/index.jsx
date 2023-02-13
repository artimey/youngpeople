import React from "react";
import styles from "./style.module.scss";

export const CowWorkingHeader = ({ title }) => {
  let lastWordTitle = title;

  if (title.toUpperCase() === "ПЕРЕГОВОРКА") {
    lastWordTitle = "переговорки"
  } else if (title.toUpperCase() === "КОНТЕНТ-ФЕРМА") {
    lastWordTitle = "контент-фермы"
  } else if (title.split(' ')[0].toUpperCase() === "ЗАЛ") {
    lastWordTitle = "ЗАЛа ДЛЯ ТРЕНИРОВОК И ТАНЦЕВАЛЬНЫХ ЗАНЯТИЙ"
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Заявка на <br /> бронирование <br /> {lastWordTitle}
      </h1>
      <p className={styles.subtitle}>
        После отправки формы с вами свяжется наш администратор для уточнения
        деталей
      </p>
    </header>
  );
};
