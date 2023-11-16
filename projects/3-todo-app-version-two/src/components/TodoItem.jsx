import Button from "./Button";

const TodoItem = ({ todoName, todoDate }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <Button text={"Delete"} className={"btn btn-danger custom-btn"} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
