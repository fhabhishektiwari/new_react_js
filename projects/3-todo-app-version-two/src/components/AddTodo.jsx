import Button from "./Button";

function AddTodo() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo here"
              aria-label="todo"
              aria-describedby="basic-addon1"
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
            />
          </div>
        </div>
        <div className="col-2">
          <Button text="Add" className={"btn btn-success custom-btn"} />
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
