import React, { useState } from "react";
import styles from "./styles.module.scss";
export const Checkbox = ({checked, onChange}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked((s) => !s);
    onChange(!isChecked)
  };
  return (
    <div className={styles.checkBox} onClick={handleChange}>
      {checked && <i className="ri-check-line text-white"></i>}
    </div>
  );
};
