import React from 'react';
import ReactDOM from 'react-dom/client';
import "./some_css.css"
function OurApp() {
  return (
    <>
      <Header />
      <Body />
      <Vehicle color="red" type="Chev" speed="100" />
      <Vehicle color="pink" type="Bike" speed="25" />
      <Vehicle color="blue" type="Honda" speed="120" />
      <Footer />
    </>
  )
}

function Vehicle(props) {
  return <li>A {props.color} {props.type} can go {props.speed} miles per hour.</li>
}

function Header() {
  return <h1 className="special">App Header</h1>
}

function Body() {
  return (
  <p>The current time is {new Date().toLocaleString()}.</p>
  )
}

function Footer() {
  return (
    <small className='teal'>Copyright Footer Text</small>
  )
}
const root = ReactDOM.createRoot(document.querySelector("#app"))
setInterval(function() {
  root.render(<OurApp />)
}, 1000)