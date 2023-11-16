const CurrentTime = () => {
  const time = new Date();
  return (
    <div className="container text-center">
      <div className="row mt-3">
        <div className="col-12">
          <p className="lead text-white">
            This is the current time:{time.toLocaleDateString()}-{" "}
            {time.toLocaleTimeString()}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentTime;
