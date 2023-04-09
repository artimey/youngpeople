import { RiUserLine } from "react-icons/ri";
import styles from "./style.module.scss";

export const DefaultAvatar = () => {
  return (
    <div className={styles.defaultAvatar}>
      <RiUserLine color="#fff" width="4rem" height="4rem" />
    </div>
  );
};
