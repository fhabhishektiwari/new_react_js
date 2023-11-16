function TodoItem2() {
  const todoName = "Go to college";
  const todoDate = "5/10/2023";
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
