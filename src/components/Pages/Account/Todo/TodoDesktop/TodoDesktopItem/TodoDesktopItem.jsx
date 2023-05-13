import { TodoCheckbox } from "../../TodoCheckbox/TodoCheckbox";
import styles from "../../index.module.scss";

export const TodoDesktopItem = ({ item, openEditTodoPopup }) => {
  const handleOpen = (e) => {
    if (e.target.tagName !== "BUTTON") {
      openEditTodoPopup(item);
    }
  };

  return (
    <tr
      className={`${styles.row} hover:bg-white8 rounded-[3rem] cursor-pointer`}
      onClick={handleOpen}
    >
      <td className="pl-[1.6rem] py-[0.8rem] rounded-l-2xl">
        <div className="flex items-center">
          <TodoCheckbox checked={item.isComplete} />

          <span
            className={`${
              item.isComplete ? "line-through text-white50" : "text-white"
            }`}
          >
            {item.title}
          </span>
        </div>
      </td>
      <td
        className={`${
          item.isComplete ? "line-through text-white50" : "text-white"
        }`}
      >
        {item.deadline}
      </td>
      <td className="rounded-r-2xl pr-[1.6rem]">
        <button className={styles.button}>отклонить</button>
      </td>
    </tr>
  );
};
