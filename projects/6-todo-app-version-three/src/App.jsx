import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoItems, setTodoitems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    if (itemName !== "" && itemDueDate !== "") {
      const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: itemDueDate },
      ];
      setTodoitems(newTodoItems);
    }
  };

  const handleDelete = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoitems(newTodoItems);
  };

  return (
    <>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDelete} />
    </>
  );
}

export default App;