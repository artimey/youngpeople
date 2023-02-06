import React from "react";
import styles from "./styles.module.scss";
export const PartnersHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Становитесь <br /> нашим партнером
      </h1>
      <p className={styles.subtitle}>
        Бесплатно проводите мероприятия на базе нашего <br /> пространства
        и пишите новости на платформе <br /> Молодёжи Москвы, продвигая свою
        организацию
      </p>
    </header>
  );
};
