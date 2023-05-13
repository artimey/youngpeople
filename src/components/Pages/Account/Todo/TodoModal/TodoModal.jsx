import React from "react";
import { TodoCheckbox } from "../TodoCheckbox/TodoCheckbox";
import styles from "./style.module.scss";
import { RiCalendarFill, RiWalkFill } from "react-icons/ri";

export const TodoModal = ({ data }) => {
  return (
    <div>
      <div className="flex items-start">
        <div>
          <div className="h-[5px]"></div>
          <TodoCheckbox checked={data.isComplete} />
        </div>

        <div>
          <span
            className={`${
              data.isComplete ? "line-through text-white50" : "text-white"
            } ${styles.title}`}
          >
            {data.title}
          </span>

          {/* subtitle here */}
          <span className={styles.subtitle}>
            Небольшое описание задачи без ограничения в количество возможных
            строк, вот такое вот описание интересное. У меня получилось в 3
            строки
          </span>

          {/* task info */}
          <div>
            <ul className={styles.info}>
              <li className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  <RiCalendarFill className="mr-[1rem] text-white50" />
                  <span>Дедлайн</span>
                </span>

                {/* date tme here */}
                <span className={styles.infoContent}>14.03.2023, 11:00</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  <RiWalkFill className="mr-[1rem] text-white50" />
                  <span>Мероприятие</span>
                </span>

                {/* type of event here */}
                <span className={styles.infoContent}>
                  Экскурсия в кремль c Молодежей Москвы
                </span>
              </li>
            </ul>
          </div>

          {/* delete task button */}
          <div className="flex justify-end mt-[4rem]">
            <button className={styles.button}>Отклонить задачу</button>
          </div>
        </div>
      </div>
    </div>
  );
};
