import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter); //store.counter in counter is a slice name
  console.log(counterVal);
  return (
    <div>
      <p className="lead mb-4">Counter Current Value: {counterVal}</p>
    </div>
  );
};

export default DisplayCounter;
