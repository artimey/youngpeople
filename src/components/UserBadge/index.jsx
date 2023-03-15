import styles from "./styles.module.scss";
import User from "../../img/userCircle.svg";
import marshmallow from "../../img/lkButtons/marshmallow.png";
import { Link } from "react-router-dom";

export const UserBadge = ({ name = "Захар", user = null }) => {
  return (
    <Link to={"/account"} className={styles.badgeWrapper}>
      <div className={styles.userAvatar}>
        <img alt={name} src={user ?? User} />
      </div>
      <div className={styles.userName}>{name}</div>

      <div className={styles.coinsWrapper}>
        <img src={marshmallow} alt="" />
        &nbsp;
        <span>64</span>
      </div>
    </Link>
  );
};
