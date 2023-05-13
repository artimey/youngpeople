import { Link } from "react-router-dom";

import image1 from "../../../img/about/DSC01650.jpg";
import image2 from "../../../img/about/DSC01646.jpg";

import { ReactComponent as Mic } from "../../../img/about/mic.svg";
import { ReactComponent as Cam } from "../../../img/about/cam.svg";
import { ReactComponent as Laptop } from "../../../img/about/laptop.svg";
import { ReactComponent as People } from "../../../img/about/people.svg";
import { ReactComponent as Run } from "../../../img/about/run.svg";
import { ReactComponent as Rocks } from "../../../img/about/rocks.svg";

import styles from "./style.module.scss";

export const Office = () => {
  return (
    <div className={styles.office}>
      <div className={styles.officeWrapp}>
        <div className={styles.fix}>
          <img src={image1} alt="img" />
        </div>
        <div className={styles.fix}>
          <img src={image2} alt="img" />
        </div>
      </div>

      <span className={`px-5 sm:px-[41px] ${styles.officeText}`}>
        офис <br /> Молодежи <br /> Москвы
      </span>

      <div className={`px-5 sm:px-[41px] ${styles.container}`}>
        <ul className={styles.content}>
          <li className={styles.contentItem}>
            <Mic /> <span>Зал для мероприятий</span>
          </li>
          <li className={styles.contentItem}>
            <Cam />
            <span>Видеостудия</span>
          </li>
          <li className={styles.contentItem}>
            <Laptop />
            <span>Коворкинг</span>
          </li>
          <li className={styles.contentItem}>
            <Run /> <span>Зал для тренировок и танцев</span>
          </li>
          <li className={styles.contentItem}>
            <People /> <span>Переговорка</span>
          </li>
          <li className={styles.contentItem}>
            <Rocks />
            <span>
              Контент-ферма — все для работы, организации мероприятий, форумов,
              фестивалей и других событий, которые проводят общественные
              организации
            </span>
          </li>
        </ul>
        <Link to={`/co-working-zones/`} className={styles.button}>
          Посмотреть <br /> пространства
        </Link>
      </div>
    </div>
  );
};
