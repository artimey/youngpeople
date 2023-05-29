import React from "react";
import { TodoCheckbox } from "../../TodoCheckbox/TodoCheckbox";

export const TodoMobileItem = ({ item, openEditTodoPopup }) => {
  const handleOpen = () => {
    openEditTodoPopup(item);
  };

  return (
    <div
      className="rounded-[2rem] bg-white8 pt-[1.8rem] p-[1.6rem] mb-[1.2rem] last:mb-0"
      onClick={handleOpen}
    >
      <div className="flex items-start">
        <TodoCheckbox checked={item.isDone} />

        <div>
          <span
            className={`${
              item.isDone ? "line-through text-white50" : "text-white"
            } block mb-[1rem]`}
          >
            {item.name}
          </span>

          <div
            className={`${
              item.isComplete ? "line-through text-white50" : "text-white"
            }`}
          >
            {item.deadline}
          </div>
        </div>
      </div>
    </div>
  );
};
