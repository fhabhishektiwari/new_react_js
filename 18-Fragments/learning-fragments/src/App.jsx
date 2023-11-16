import React from "react";
const App = () => {
  const listItems = ["Dal", "Green Vegetables", "Curd", "Roti", "Rice"];
  return (
    <React.Fragment>
      {/* Either use <React.Fragment></React.Fragment> or use <></> */}
      <h1>Healty Food Items</h1>
      {/* <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetables</li>
        <li className="list-group-item">Curd</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Rice</li>
      </ul> */}
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default App;
