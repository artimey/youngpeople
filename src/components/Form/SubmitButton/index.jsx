import styles from "./styles.module.scss";
export const SubmitButton = ({
  isLoading = false,
  text = "Отправить",
  loadingText = "Отправляется",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.submitBtn} disabled:bg-white50`}
      type="submit"
      disabled={isLoading}
    >
      {!isLoading ? `${text}` : `${loadingText}`}
    </button>
  );
};
