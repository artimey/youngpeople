import { useUpdateTaskStatusMutation } from "../../../../../../app/api/tasks";
import { TodoCheckbox } from "../../TodoCheckbox/TodoCheckbox";
import styles from "../../index.module.scss";

export const TodoDesktopItem = ({ item, openEditTodoPopup }) => {
  const [onUpdate, { isSuccess }] = useUpdateTaskStatusMutation();
  const handleOpen = (e) => {
    if (e.target.tagName !== "BUTTON") {
      openEditTodoPopup(item);
    }
  };
  const handleUpdateStatus = async () => {
    await onUpdate({ taskId: item.id });
  };
  return (
    <tr
      className={`${styles.row} hover:bg-white8 rounded-[3rem] cursor-pointer`}
      onClick={handleOpen}
    >
      <td className="pl-[1.6rem] py-[0.8rem] rounded-l-2xl">
        <div className="flex items-center">
          <TodoCheckbox checked={item.isDone} />

          <span
            className={`${
              item.isDone ? "line-through text-white50" : "text-white"
            }`}
          >
            {item.name}
          </span>
        </div>
      </td>
      <td
        className={`${
          item.isDone ? "line-through text-white50" : "text-white"
        }`}
      >
        {item.deadline}
      </td>
      <td className="rounded-r-2xl pr-[1.6rem]">
        <button className={styles.button} onClick={handleUpdateStatus}>
          отклонить
        </button>
      </td>
    </tr>
  );
};
