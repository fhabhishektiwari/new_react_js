import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
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
