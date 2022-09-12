import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";
import App from "./App";
import "./index.css";
import dotenv from "dotenv";
import axios from "axios"
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3003";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
