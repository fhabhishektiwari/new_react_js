import React from "react";
const App = () => {
  return (
    <React.Fragment>
      {/* Either use <React.Fragment></React.Fragment> or use <></> */}
      <h1>Healty Food Items</h1>
      <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetables</li>
        <li className="list-group-item">Curd</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Rice</li>
      </ul>
    </React.Fragment>
  );
};

export default App;
