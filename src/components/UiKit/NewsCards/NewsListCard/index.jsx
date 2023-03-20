import clsx from "clsx";
import { Link } from "react-router-dom";
import { transformNewsDate } from "../../../../utils/helpers";
import styles from "./style.module.scss";

const stylesByCount = {
  5: "newsCard5",
  4: "newsCard4",
  3: "newsCard3",
};

export const NewsListCard = ({ item, cardCount }) => {
  return (
    <Link
      to={`/news/${item.id}`}
      className={clsx(styles.newsCard, styles[stylesByCount[cardCount]])}
    >
      <div className={styles.cardWrapper}>
        <img
          className={styles.newsCardImg}
          src={item.img}
          alt={item.title}
          loading="lazy"
        />
      </div>
      <h3 className={styles.newCardTitle}>{item.title}</h3>
      <span className={styles.newsCardDate}>
        {transformNewsDate(item.date)}
      </span>
    </Link>
  );
};
