import React from 'react';
import ReactDOM from 'react-dom/client';
import "./some_css.css"

const useState = React.useState

const vehicles = [
  { color: "Red", type: "Subaru", speed: "123", id: 123456789 },
  { color: "Magenta", type: "Toyota", speed: "325", id: 987654321 },
  { color: "Yellow", type: "Ford", speed: "296", id: 123123123 },
  { color: "White", type: "Ram", speed: "114", id: 456456456 },
  { color: "Teal", type: "Chev", speed: "696", id: 789789789 }
]











function OurApp() {
  return (
    <>
      <Header />
      <Body />
      <ul>
      {vehicles.map(function(vehicle) {
        return <Vehicle color={vehicle.color} type={vehicle.type} speed={vehicle.speed} key={vehicle.id} />
      })}
      {/*as arrow*/}
      <br />
      {vehicles.map(vehicle => <Vehicle color={vehicle.color} type={vehicle.type} speed={vehicle.speed} key={vehicle.id} />
      )}
      </ul>
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
  const [getTheTiem, setTheTime] = useState(new Date().toLocaleString())
  // setTimeout(func_here, 1000)
  setTimeout(function() {
    setTheTime(new Date().toLocaleString())
  }, 1000)
  return (
  <p>The current time is {getTheTiem}.</p>
  )
}

function Footer() {
  return (
    <small className='teal'>Copyright Footer Text</small>
  )
}




const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<OurApp />)