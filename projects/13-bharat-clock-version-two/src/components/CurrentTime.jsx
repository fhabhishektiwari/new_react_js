import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the interval");
    };
  }, []);
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
