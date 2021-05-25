import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
