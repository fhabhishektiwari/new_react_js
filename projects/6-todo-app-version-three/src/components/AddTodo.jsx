import { useState, useRef } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import { IoMdAdd } from "react-icons/io";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // console.log(event);
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <form style={{ display: "block" }} onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter todo here"
                aria-label="todo"
                aria-describedby="basic-addon1"
                ref={todoNameElement}
                // value={todoName}
                // onChange={handleNameChange}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control"
                placeholder="Enter todo here"
                aria-label="todo"
                aria-describedby="basic-addon1"
                ref={dueDateElement}
                // value={dueDate}
                // onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="col-2">
            <Button className={"btn btn-success custom-btn"}>
              <IoMdAdd />
              <span style={{ marginLeft: "3px" }}>Add</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
// AddTodo.propTypes = {
//   onNewItem: PropTypes.func.isRequired,
// };
export default AddTodo;
