import React, { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState();
  const [sign, setSign] = useState("+");

  const calculate = () => {
    const numberA = parseInt(a);
    const numberB = parseInt(b);
    let ctemp = 0;

    if (sign === "+") {
      ctemp = numberA + numberB;
    } else if (sign === "-") {
      ctemp = numberA - numberB;
    } else if (sign === "x") {
      ctemp = numberA * numberB;
    } else if (sign === "/") {
      ctemp = numberA / numberB;
    }

    setC(ctemp);
  };

  return (
    <div className="App">
      <div className="header">
        <a className="link" href="https://www.facebook.com/thanhthichchup/">
          Contact
        </a>
      </div>
      <div className="title">
        <h1>CALCULATE TWO NUMBERS</h1>
      </div>
      <div className="domathContainer">
        <div className="viewer">{c}</div>
        <div className="domath">
          <input
            className="number"
            type="number"
            onChange={(event) => setA(event.target.value)}
          ></input>
          <div className="number">
            <select
              className="sign"
              onChange={(event) => setSign(event.target.value)}
              value={sign}
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="x">*</option>
              <option value="/">/</option>
            </select>
          </div>
          <input
            className="number"
            type="number"
            onChange={(event) => setB(event.target.value)}
          />
        </div>

        <button onClick={calculate}>calculate</button>
      </div>
    </div>
  );
}

export default App;
