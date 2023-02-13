import { Link } from "react-router-dom";
import { transformDate } from "../../../../utils/helpers";
import styles from "./style.module.scss";

export const NewsGridItem = ({ item }) => {
  return (
    <Link
      to={`/news/${item.id}`}
      className={`${styles.newsItem}`}
      //   className="inline-block p-5 rounded-xl bg-white hover:text-brandPink"
    >
      <img
        className={`${styles.newsImg}`}
        src={item.img}
        alt={item.title}
      />
      <h3 className={styles.newsTitle}>{item.title}</h3>
      <span className={styles.newsDate}>{transformDate(item.date)}</span>
    </Link>
  );
};
