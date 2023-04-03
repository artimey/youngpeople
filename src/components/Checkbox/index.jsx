import React, { useState } from "react";
import { RiCheckLine } from "react-icons/ri";
import styles from "./styles.module.scss";
export const Checkbox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked((s) => !s);
    onChange(!isChecked);
  };

  return (
    <div className={styles.checkBox} onClick={handleChange}>
      {checked && <RiCheckLine color="#fff" />}
    </div>
  );
};
