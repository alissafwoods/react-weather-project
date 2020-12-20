import React from "react";
import "./styles.css";
import sunImg from "./Images/01d.png";

export default function App() {
  let weatherData = {
    city: "Victoria",
    updated: "Thursday 19:58",
    temperature: 11,
    conditions: "Sunny",
    humidity: 60,
    wind: 3,
  };
  return (
    <div className="App">
      <div className="row">
        <div className="col-4">
          <div className="card" styles="width: 150px">
            <div className="card-body">
              <p className="today-temperature">
                <span>{weatherData.temperature}°</span>
                <br />
                <a href="/">C</a> |<a href="/">F</a>
              </p>
              <img
                src={sunImg}
                className="card-img-top"
                alt={weatherData.conditions}
              />
            </div>
          </div>
        </div>
        <div className="col-8">
          <h1>{weatherData.city}</h1>
          <h3>
            Last updated: <span>{weatherData.updated}</span>
          </h3>
          <ul>
            <li>{weatherData.conditions}</li>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind Speed: <span>{weatherData.wind}</span> km/hr
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="row"></div>
      <br />
      <script src="src/script.js"></script>
    </div>
  );

  function newFunction() {
    return "Victoria";
  }
}
