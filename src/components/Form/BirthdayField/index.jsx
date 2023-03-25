import { PatternFormat } from "react-number-format";
import { FormField } from "../FormField";

export const BirthdayField = ({ fieldProps, birthdayField }) => {
  return (
    <FormField {...fieldProps}>
      <PatternFormat
        {...birthdayField}
        format="##.##.####"
        mask="_"
        type="text"
        placeholder={"10.09.1147"}
      />
    </FormField>
  );
};
