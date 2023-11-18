import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <AppName />
      <AddTodo />
      <WelcomeMessage />
      <TodoItems />
    </TodoItemsContextProvider>
  );
}

export default App;
