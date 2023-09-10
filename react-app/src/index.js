import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
function OurApp() {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Our Amazing App Header"),
    React.createElement("p", null, `The current time is ${new Date().toLocaleString()}.`),
    React.createElement("small", null, "Copyright Footer Text")
  ])
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
setInterval(function() {
  root.render(React.createElement(OurApp))
}, 1000)
