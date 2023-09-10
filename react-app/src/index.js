import React from 'react';
import ReactDOM from 'react-dom/client';
import "./some_css.css"

const useState = React.useState













function OurApp() {
  const [vehicles, setVehicles] = useState([
    { color: "Red", type: "Subaru", speed: "123", id: 123456789 },
    { color: "Magenta", type: "Toyota", speed: "325", id: 987654321 },
    { color: "Yellow", type: "Ford", speed: "296", id: 123123123 },
    { color: "White", type: "Ram", speed: "114", id: 456456456 },
    { color: "Teal", type: "Chev", speed: "696", id: 789789789 }
  ])
  return (
    <>
      <Header />
      <LikeArea /> 
      <Body />
      <VehicleForm setVehicles={setVehicles} />
      <ul>
      {vehicles.map(function(vehicle) {
        return <Vehicle setVehicles={setVehicles} id={vehicle.id} color={vehicle.color} type={vehicle.type} speed={vehicle.speed} key={vehicle.id} />
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

function VehicleForm(props) {
  const [color, setColor] = useState()
  const [type, setType] = useState()
  const [speed, setSpeed] = useState()
  function handleSubmit(e) {
    e.preventDefault()
    props.setVehicles(item => item.concat({color, type, speed, id: Date.now()}))
    // set form fields blank after submit 
    setColor("")
    setType("")
    setSpeed("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Vehicle</legend>
        <input value={color} onChange={e => setColor(e.target.value)} placeholder="Color" />
        <input value={type} onChange={e => setType(e.target.value)} placeholder="Type" />
        <input value={speed} onChange={e => setSpeed(e.target.value)} placeholder="Speed" />
        <button>Add Vehicle</button>
      </fieldset>
    </form>
  )
}


function LikeArea() {
  const [likeCount, setLikeCount] = useState(0)
  function increaseLikeHandeler() {
    setLikeCount(function(value) {
      return value + 1
    })
  }
  function decreaseLikeHandeler() {
    setLikeCount(value => {
      if (value > 0) {
        return value - 1;
      } else {
        return 0;
      }
    })
  }
  return ( 
    <>
    <button onClick={increaseLikeHandeler}>Like More</button> 
    <button onClick={decreaseLikeHandeler}>Like Less</button>
    <h2>This page has been liked {likeCount} times.</h2>
    </>
  )
}

function Vehicle(props) {
  function handleDelete() {
    props.setVehicles(prev => prev.filter(vehicle => vehicle.id != props.id))
  }
  return (<li>A {props.color} {props.type} can go {props.speed} miles per hour.
  <button onClick={handleDelete}>Delete</button>
  </li>
  )
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