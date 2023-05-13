import { TodoMobileItem } from "./TodoMobileItem/TodoMobileItem";

export const TodoMobile = ({ data, openEditTodoPopup }) => {
  return (
    <div className="w-full">
      {data.map((item) => {
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
