import { memo ,useState} from "react";
import { FieldButton } from "../../../UiKit/Buttons";
import { RiDeleteBinFill } from "react-icons/ri";
import { DefaultAvatar } from "../../../UiKit/DefaultAvatar";
import UploadButton from "../../../Form/FileField/UploadButton";

import styles from "./styles.module.scss";

const FormHeader = ({
  head = "Данные организации",
  handleDelete,
  handleChangeAvatar,
  avatar = null,
}) => {
  const [imgAvatar, setAvatar] = useState(avatar);
  const handleChange = (file) => {
    setAvatar(file.imgFile);
    handleChangeAvatar.current(file);
  };
  const onDelete = () => {
    setAvatar(null);
    handleDelete.current();
  };
  return (
    <div className={styles.hederWrapper}>
      <div className={styles.head}>
        <h2 className={styles.title}>{head}</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.changeAvatar}>
          <UploadButton onUpload={handleChange} />
        </div>
        <div className={styles.avatar}>
          {imgAvatar ? <img src={imgAvatar} alt={head} /> : <DefaultAvatar />}
        </div>
        <div className={styles.removeAvatar}>
          <FieldButton
            type="bg8"
            view={true}
            icon={<RiDeleteBinFill />}
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};
export default memo(FormHeader);
