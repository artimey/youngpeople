import { useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import styles from "./styles.module.scss";
import { useHistoryBack } from "../../../app/hooks/useHistoryBack";

export const PageHeader = ({
  title,
  subtitle,
  linkText = "Назад",
  children,
}) => {
  const { handleBack } =  useHistoryBack();

  return (
    <header className={styles.header}>
      <span
        onClick={handleBack}
        className="absolute flex items-center text-white50 text-[2rem] leading-[2.3rem] left-[4rem] cursor-pointer"
      >
        <RiArrowLeftSLine />
        &nbsp;{linkText}
      </span>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>{children ? children : subtitle}</div>
    </header>
  );
};
