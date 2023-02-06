import React, { useState } from "react";
import styles from "./styles.module.scss";
export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const hahdleChange = () => {
    setChecked((s) => !s);
  };
  return (
    <div className={styles.checkBox} onClick={hahdleChange}>
      {checked && <i className="ri-check-line text-white"></i>}
    </div>
  );
};
