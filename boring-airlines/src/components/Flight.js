import React, { Component } from "react";
import axios from "axios";

class Flight extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      destination: "",
      origin: "",
      date: "",
    };
  }

  componentDidMount() {
    this.fetchFlightData();
  }

  fetchFlightData = () => {
    const flight = this.props.match.params.flightID;
    axios
      .get(`http://localhost:3001/flights/${flight}.json`)
      .then((response) => {
        this.setState(() => ({
          name: response.data.flight_number,
          destination: response.data.destination,
          origin: response.data.origin,
          date: response.data.date,
        }));
      });
  };

  render() {
    return (
      <>
        <h1>Flight {this.state.name}</h1>
        <h3>Origin: {this.state.origin}</h3>
        <h3>Destination: {this.state.destination}</h3>
        <h3>Date: {this.state.date}</h3>
      </>
    );
  }
}
export default Flight;
