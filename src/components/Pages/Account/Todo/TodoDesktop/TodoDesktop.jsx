import React from "react";
import { TodoDesktopItem } from "./TodoDesktopItem/TodoDesktopItem";

export const TodoDesktop = ({ data, openEditTodoPopup }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-white50">
          <th>
            <div className="ml-[5rem] mb-[2.7rem]">Задача</div>
          </th>
          <th>
            <div className="mb-[2.7rem]">Дедлайн</div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <TodoDesktopItem
              key={item.id}
              item={item}
              openEditTodoPopup={openEditTodoPopup}
            />
          );
        })}
      </tbody>
    </table>
  );
};
