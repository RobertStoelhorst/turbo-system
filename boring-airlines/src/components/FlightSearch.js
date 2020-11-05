import React, { Component } from "react";
import axios from "axios";

class FlightSearch extends Component {
  constructor(props) {
   super(props);
   this.state = {
      origin: '',
      destination: '',
      date: ''
    }; this._onOriginChange = this._onOriginChange.bind(this);
      this._onDestinationChange = this._onDestinationChange.bind(this);
        this._handleSearchSubmit = this._handleSearchSubmit.bind(this);
  }


_onOriginChange = (event) => {
  console.log(event)
   this.setState({
       origin: event.target.value
   });
}

_onDestinationChange = (event) => {
  console.log(event)
   this.setState({
       destination: event.target.value
   });
}

_handleSearchSubmit = (event) => {
  event.preventDefault();
  const { origin, destination } = this.state;
  let search = {
    origin: origin,
    destination: destination
  };
  console.log(search)
  axios
    .get("http://localhost:3001/flights.json", { search }).then((response) => {
      console.log(response)
    })
}

render() {

var { origin, destination } = this.state

  return (
    <div>
    <h1>Flight Search</h1>
      <form onSubmit={this._handleSearchSubmit}>
      <input type="text" placeholder="Origin" name="origin" value={origin} onChange={this._onOriginChange}/>
      <input type="text" placeholder="destination" name="destination" value={destination} onChange={this._onDestinationChange}/>
      <button class="btn btn-primary" placeholder="submit" type="submit">
        Search Flight
      </button>
      </form>
    </div>
    )
  }
}


export default FlightSearch;
