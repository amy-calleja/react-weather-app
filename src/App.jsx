import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import AirPollutionPage from './pages/AirPollutionPage'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container container-md">
          <Switch>
            <Route exact path="/">
              <WeatherPage />
            </Route>
            <Route exact path="/pollution-forecast">
              <AirPollutionPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
