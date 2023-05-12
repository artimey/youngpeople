import { FormField } from "../FormField";
import styles from "./styles.module.scss";
export const TextAreaField = ({ fieldProps, textareaProps }) => {
  return (
    <FormField {...fieldProps}>
      <textarea {...textareaProps} type="text" />
    </FormField>
  );
};
