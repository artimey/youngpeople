import styles from "./styles.module.scss";
export const SubmitButton = ({
  isLoading = false,
  text = "Отправить",
  loadingText = "Отправляется",
}) => {
  return (
    <button
      className={`${styles.submitBtn} disabled:bg-white50`}
      type="submit"
      disabled={isLoading}
    >
      {!isLoading ? `${text}` : `${loadingText}`}
    </button>
  );
};
