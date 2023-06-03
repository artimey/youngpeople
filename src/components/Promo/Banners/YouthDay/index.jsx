import { ReactComponent as Youth } from "../../../../img/banners/yout.svg";
import { ReactComponent as YouthMobile } from "../../../../img/banners/youtMobile.svg";
import styles from "./styles.module.scss";

const link = "https://xn--d1aacbfmrhilb8n.xn--80adxhks/";

export const YouthDay = () => {
  return (
    <a href={link} target="_blank" className={styles.bannerWrapper}>
      <div className={styles.desktop}>
        <Youth />
      </div>
      <div className={styles.mobile}>
        <YouthMobile />
      </div>
    </a>
  );
};
