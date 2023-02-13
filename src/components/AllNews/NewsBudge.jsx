import React from "react";
import { Link } from "react-router-dom";
import { transformDate } from "../../utils/helpers";
import styles from "./allNews.module.scss";

const NewsBudge = ({ item }) => {
  return (
    <Link
      to={`/news/${item.id}`}
      className={`${styles.newsBudge} hover:bg-white16`}
    >
      <span className={styles.date}>{transformDate(item.date)}</span>
      <h3 className={styles.title}>{item.title}</h3>
    </Link>
  );
};

export default NewsBudge;
