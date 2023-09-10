import React from 'react';
import ReactDOM from 'react-dom/client';
function OurApp() {
  return (
    <>
      <h1 className="special">Our Amazing App Header</h1>
      <p>The current time is {new Date().toLocaleString()}.</p>
      <small>Copyright Footer Text</small>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
setInterval(function() {
  root.render(<OurApp />)
}, 1000)