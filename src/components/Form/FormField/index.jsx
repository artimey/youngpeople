import styles from "./style.module.scss";

export const FormField = ({
  children,
  errors,
  touched,
  fieldName,
  fieldLabel,
}) => {
  return (
    <label className={styles.field}>
      <div className={styles.labelTitle}>{fieldLabel}</div>
      {children}
      <span className={styles.error}>
        {errors[fieldName] && touched && errors[fieldName]}
      </span>
    </label>
  );
};
