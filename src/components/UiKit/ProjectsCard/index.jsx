import { Link } from "react-router-dom";
import { BASE_URL } from "../../../utils/constants";
import styles from "./style.module.scss";

export const ProjectsCard = ({
  title = "МедиаШУМ",
  previewText = "Проект помогает молодежи создавать продакшены и обучает актуальным направлениям в медиа",
  idx = 1,
  id,
  img,
}) => {
  return (
    <Link to={id} className={styles.projectCardContainer}>
      <span className={styles.projectCardTitle}>
        {title.replace(/&quot;/, "«").replace(/&quot;/, "»")}
      </span>
      <div className={styles.projectCardDetail}>
        <span className={styles.projectNumber}>{idx}</span>
        <span className={styles.projectPreviewText}>{previewText}</span>
      </div>
      <span className={styles.projectLink}>
        Подробнее <br /> о проекте
      </span>
      <img
        src={
          img
            ? img
            : `${BASE_URL}/upload/iblock/6ee/s1qbv2pjq9vp0p27bolw5fj66bjr2oie.png`
        }
        alt={title}
        className={styles.projectImg}
      />
    </Link>
  );
};
