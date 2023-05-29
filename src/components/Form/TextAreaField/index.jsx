import { FormField } from "../FormField";
export const TextAreaField = ({ fieldProps, textareaProps }) => {
  return (
    <FormField {...fieldProps}>
      <textarea {...textareaProps} type="text" />
    </FormField>
  );
};
