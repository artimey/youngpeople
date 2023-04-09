import { RiCameraSwitchFill } from "react-icons/ri";
import { memo, useRef } from "react";
import { allowedFormats } from "../../../utils/constants";
import styles from "./styles.module.scss";

const UploadButton = ({ onUpload }) => {
  const inputRef = useRef(null);
  const avatar = useRef(null);
  const handleClick = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleChange = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const file = e.target.files[0];
    if (allowedFormats[file.type]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        onUpload({ file, imgFile: e.target.result });
      };
      fileReader.readAsDataURL(file);
      avatar.current = file;
    }
    e.target.value = null;
  };
  return (
    <button onClick={handleClick} className={styles.uploadButton}>
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg,image/jpeg,image/heic"
        onChange={handleChange}
        onClick={handleClick}
      />
      <RiCameraSwitchFill className={styles.buttonIcon} />
    </button>
  );
};

export default memo(UploadButton);
