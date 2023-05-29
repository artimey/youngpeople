import { useSelector } from "react-redux";
import { TodoMobileItem } from "./TodoMobileItem/TodoMobileItem";

export const TodoMobile = ({ data, openEditTodoPopup }) => {
  const activeEvent = useSelector((s) => s.accountOptions.activeEventTab);
  return (
    <div className="w-full">
      {activeEvent &&
        data[activeEvent].map((item) => {
          return (
            <TodoMobileItem
              key={item.id}
              item={item}
              openEditTodoPopup={openEditTodoPopup}
            />
          );
        })}
    </div>
  );
};
