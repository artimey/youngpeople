import React from "react";
import { TodoCheckbox } from "../TodoCheckbox/TodoCheckbox";
import styles from "./style.module.scss";
import { RiCalendarFill, RiWalkFill } from "react-icons/ri";
import { useUpdateTaskStatusMutation } from "../../../../../app/api/tasks";

export const TodoModal = ({ data, onClose }) => {
  const [onUpdate, { isSuccess }] = useUpdateTaskStatusMutation();

  const handleUpdateStatus = async () => {
    await onUpdate({ taskId: data.id });
    onClose();
  };
  return (
    <div>
      <div className="flex items-start">
        <div>
          <div className="h-[5px]"></div>
          <TodoCheckbox checked={data.isDone} />
        </div>

        <div>
          <span
            className={`${
              data.isDone ? "line-through text-white50" : "text-white"
            } ${styles.name}`}
          >
            {data.name}
          </span>

          {/* subtitle here */}
          <span className={styles.subtitle}>{data.description}</span>

          {/* task info */}
          <div>
            <ul className={styles.info}>
              <li className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  <RiCalendarFill className="mr-[1rem] text-white50" />
                  <span>Дедлайн</span>
                </span>

                {/* date tme here */}
                <span className={styles.infoContent}>{data.deadline}</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoTitle}>
                  <RiWalkFill className="mr-[1rem] text-white50" />
                  <span>Мероприятие</span>
                </span>

                {/* type of event here */}
                <span className={styles.infoContent}>{data.eventName}</span>
              </li>
            </ul>
          </div>

          {/* delete task button */}
          <div className="flex justify-end mt-[4rem]">
            <button className={styles.button} onClick={handleUpdateStatus}>
              Отклонить задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
