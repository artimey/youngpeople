import { Input } from "antd";
import { FormField } from "../FormField";

export const EmailField = ({ fieldProps, emailFieldProps }) => {
  return (
    <FormField {...fieldProps}>
      <Input
        {...emailFieldProps}
        type="email"
        name="email"
        className="placeholder:text-white50"
      />
    </FormField>
  );
};
