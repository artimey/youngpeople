import React from "react";
import { TodoDesktopItem } from "./TodoDesktopItem/TodoDesktopItem";
import { useSelector } from "react-redux";

export const TodoDesktop = ({ data, openEditTodoPopup }) => {
  const activeEvent = useSelector((s) => s.accountOptions.activeEventTab);
  return (
    <table className="w-full mb-[28vh]">
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
        {activeEvent &&
          data[activeEvent].map((item) => {
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
