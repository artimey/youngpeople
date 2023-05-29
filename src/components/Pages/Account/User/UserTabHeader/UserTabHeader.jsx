import { useState } from "react";
import { useSelector } from "react-redux";
import testImg from "../../../../../img/cowworkingZones/contentFarm.png";
import { ButtonPopover } from "../../../../UiKit/ButtonPopover/ButtonPopover";
import { UpdateForm } from "../Forms/UpdateForm";

import styles from "./UserTabHeader.module.scss";
import clsx from "clsx";
import { ORG_GROUP_NUMBER } from "../../../../../utils/constants/person";
import { UpdatePartnerForm } from "../../Partner/Forms/UpdatePartnerForm";

export const UserTabHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { person } = useSelector((s) => s);
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <div className={styles.imgWrapper}>
          <img src={testImg} alt="username" />
        </div>

        <span className={clsx("druk", styles.helloText)}>
          Привет, {`${person ? person.initials : ""}`}!
        </span>
      </div>

      <ButtonPopover isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {person?.userGroups >= ORG_GROUP_NUMBER ? (
          <UpdatePartnerForm onClose={() => setIsModalOpen(false)} />
        ) : (
          <UpdateForm />
        )}
      </ButtonPopover>
    </div>
  );
};
