import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import AirPollutionPage from "./pages/AirPollutionPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/weatherpage">
              <WeatherPage />
            </Route>
            <Route exact path="/airpollutionpage">
              <AirPollutionPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
