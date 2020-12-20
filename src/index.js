import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Form from "./Form";
import Footer from "./Footer";
import Forecast from "./Forecast";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="container">
        <App />
        <Forecast />
        <br />
        <Form />
        <br />
        <Footer />
      </div>
    </div>
  </React.StrictMode>,
  rootElement
);
