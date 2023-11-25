const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <div
        className="spinner-border"
        style={{ width: "6rem", height: "6rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
