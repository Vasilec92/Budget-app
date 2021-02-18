import React, { useState } from "react";
import "./App.css";
//components
import Budget from "./components/Budget";
import AddTransaction from "./components/AddTransaction";
import History from "./components/History";
import Plus from "./components/Plus";
import Minus from "./components/Minus";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <GlobalProvider>
      <div className="container">
        <div className={`app-wrapper ${theme ? "black" : "white"}`}>
          <div className="header">
            <div>
              <label class="switch">
                <input
                  type="checkbox"
                  checked={theme}
                  onChange={() => setTheme(!theme)}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div className="header_title">
              <h1>Budget app</h1>
            </div>
          </div>
          <div className="info">
            <div className="info_left">
              <Budget />
              <div className="amount_details">
                <Plus />
                <Minus />
              </div>
            </div>
            <div className="info_right">
              <AddTransaction />
              <History />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
