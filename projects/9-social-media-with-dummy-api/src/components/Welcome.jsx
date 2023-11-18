const Welcome = ({ onGetPostsClick }) => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 text-center">There is no Post!</h1>
            <button className="btn btn-primary" onClick={onGetPostsClick}>
              Get Posts from Server
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
