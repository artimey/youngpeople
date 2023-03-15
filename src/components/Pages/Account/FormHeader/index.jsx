import { FieldButton } from "../../../UiKit/Buttons";
import { RiCameraSwitchFill, RiDeleteBinFill } from "react-icons/ri";
import Img from "../../../../img/about-1.png";
import styles from "./styles.module.scss";

export const FormHeader = ({ head = "Данные организации" }) => {
  return (
    <div className={styles.hederWrapper}>
      <div className={styles.head}>
        <h2 className={styles.title}>{head}</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.changeAvatar}>
          <FieldButton
            type="bg8"
            view={true}
            icon={<RiCameraSwitchFill />}
          />
        </div>
        <img src={Img} className={styles.avatar} alt={head} />
        <div className={styles.removeAvatar}>
          <FieldButton
            type="bg8"
            view={true}
            icon={<RiDeleteBinFill />}
          />
        </div>
      </div>
    </div>
  );
};
