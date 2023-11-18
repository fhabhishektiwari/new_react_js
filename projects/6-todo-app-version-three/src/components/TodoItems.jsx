import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </>
  );
};

export default TodoItems;
