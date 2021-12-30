import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    
      <div className="App"><div className="container">
        <Weather defaultCity="Milan" />
      </div>
    </div>
  );
}

export default App;
