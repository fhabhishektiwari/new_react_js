export function Hello() {
  let myName = "Abhishek Tiwari";

  const myFun = () => {
    const msg = "I am a good developer";
    return msg;
  };
  return (
    <div>
      <p>
        Hello this is {myName} and {myFun()}
      </p>
    </div>
  );
}
