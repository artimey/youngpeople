import { Link } from "react-router-dom";
import { transformDate } from "../../utils/helpers";
import styles from "./allNews.module.scss";

const NewsCard = ({ item }) => {
  return (
    <Link
      to={`/news/${item.id}`}
      className="bg-white8  hover:bg-white16 overflow-hidden rounded-[3.7rem] block"
    >
      <img
        className="w-full mb-[2.5rem]"
        src={item.img}
        alt={item.title}
      />

      <div className="mt-[2.8rem] pb-[3.5rem] px-[3.2rem]">
        <span className={styles.date}>{transformDate(item.date)}</span>
        <h3 className={styles.title}>{item.title}</h3>
      </div>
    </Link>
  );
};

export default NewsCard;
