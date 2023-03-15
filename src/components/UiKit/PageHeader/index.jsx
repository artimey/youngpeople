import { useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import styles from "./styles.module.scss";

export const PageHeader = ({
  title,
  subtitle,
  linkText = "Назад",
  children,
}) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
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
