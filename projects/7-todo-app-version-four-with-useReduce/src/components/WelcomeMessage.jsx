import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.length === 0 && (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="lead text-center">Enjoy your day 😊</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeMessage;
