import Button from "./Button";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import styles from "./TodoItem.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <Button
            text={"Delete"}
            className={"btn btn-danger custom-btn"}
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
            <span className={styles.dlBtn}>Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
};

export default TodoItem;
