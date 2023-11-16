function Random() {
  let number = Math.random() * 100;
  return (
    <h1 style={{ backgroundColor: "#f5d5a4", color: "#fff" }}>
      random Number is: {Math.round(number)}
    </h1>
  );
}
export default Random;
