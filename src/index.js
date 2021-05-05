import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-toastify/dist/ReactToastify.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";


var history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
