import React from "react";
import { ReactComponent as Calendar } from "../../../../img/calendar.svg";
import { ReactComponent as Place } from "../../../../img/place.svg";
import { ReactComponent as QrIcon } from "../../../../img/qrIcon.svg";
import { ClickButton } from "../../Buttons";

import styles from "./LkEventCard.module.scss";

export const LkEventCard = ({ data }) => {
  const { title, date, place, isOffline, id } = data;

  return (
    <div className={styles.card}>
      <div className="p-[2rem]">
        <span className={styles.title}>{title}</span>

        <div className={styles.info}>
          <Calendar />
          <span>{date}</span>
        </div>

        <div className={styles.info}>
          <Place />
          <span>{place}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <span className={styles.status}>Вы записаны</span>
        <span>
          {isOffline ? "Покажите QR-код на входе" : "Перейдите по кнопке ниже"}
        </span>

        <div className="flex flex-col mt-[2rem]">
          <ClickButton
            type="bgBlueLight"
            className="justify-center mb-[0.8rem]"
          >
            {isOffline ? (
              <>
                <QrIcon className="mr-[0.85rem] w-[1.5rem] h-[1.5rem]" />
                Развернуть QR
              </>
            ) : (
              <>
                <i className="ri-play-fill mr-[1rem]"></i>
                Смотреть
              </>
            )}
          </ClickButton>

          <ClickButton type="bgRed" className="justify-center">
            <i className="ri-close-line mr-[1rem]"></i>
            Отменить запись
          </ClickButton>
        </div>
      </div>
    </div>
  );
};
