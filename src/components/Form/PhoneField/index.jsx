import { PatternFormat } from "react-number-format";
import { FormField } from "../FormField";

export const PhoneField = ({ fieldProps, phoneFieldProps }) => {
  return (
    <FormField {...fieldProps}>
      <PatternFormat
        {...phoneFieldProps}
        mask="_"
        type="phone"
        format="+7 (###) ### ## ##"
        placeholder="+7 (999) 123-45-67"
        className="placeholder:text-white50"
      />
    </FormField>
  );
};
