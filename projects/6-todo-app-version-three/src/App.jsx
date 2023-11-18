import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
  const [todoItems, setTodoitems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    setTodoitems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoitems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem, //when key and value are same so you give direct value
      }}
    >
      <AppName />
      <AddTodo />
      <WelcomeMessage />
      <TodoItems />
    </TodoItemsContext.Provider>
  );
}

export default App;
