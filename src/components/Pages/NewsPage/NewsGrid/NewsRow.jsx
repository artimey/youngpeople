import { NewsListCard } from "../../../UiKit/NewsCards/NewsListCard";
import styles from "./style.module.scss";

export const NewsRow = ({ news }) => (
  <div className={styles.newsRow}>
    {news.map((item) => (
      <NewsListCard key={item.id} item={item} cardCount={news?.length} />
    ))}
  </div>
);
