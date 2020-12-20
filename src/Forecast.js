import React from "react";
import "./Forecast.css";
import sunImg from "./Images/01d.png";
import cloudImg from "./Images/03d.png";

export default function Forecast() {
  return (
    <div className="HourlyForecast">
      <div className="row">
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <p class="time">1:00</p>
              <img src={sunImg} width="50px" alt="Sun" />
              <p class="card-text">9° | 7°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <p class="time">4:00</p>
              <img src={sunImg} width="50px" alt="Sun" />
              <p class="card-text">9° | 7°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <p class="time">7:00</p>
              <img src={sunImg} width="50px" alt="Sun" />
              <p class="card-text">9° | 7°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <p class="time">10:00</p>
              <img src={sunImg} width="50px" alt="Sun" />
              <p class="card-text">9° | 7°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <p class="time">13:00</p>
              <img src={sunImg} width="50px" alt="Sun" />
              <p class="card-text">9° | 7°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <div className="card-body">
              <p class="time">15:00</p>
              <img src={cloudImg} width="50px" alt="Cloud" />
              <p class="card-text">8° | 4°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
