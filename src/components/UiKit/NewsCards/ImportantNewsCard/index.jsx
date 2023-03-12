import clsx from "clsx";
import { Link } from "react-router-dom";
import { transformDate } from "../../../../utils/helpers";
import styles from "./styles.module.scss";

export const ImportantNewsCard = ({ item, isFirst }) => {
  return (
    <Link to={`/news/${item.id}`} className={styles.importantNews}>
      {isFirst && (
        <div className={styles.newsImg}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </div>
      )}

      <div
        className={clsx(
          styles.newsContent,
          isFirst ? "rounded-none" : "rounded[3.2rem]"
        )}
      >
        <span className={styles.date}>{transformDate(item.date)}</span>
        <h3 className={styles.title}>{item.title}</h3>
      </div>
    </Link>
  );
};
