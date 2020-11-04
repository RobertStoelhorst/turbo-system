import React, { Component } from "react";
import { Link } from "react-router-dom";

class Flights extends Component {
  constructor() {
    super();
  }

  render() {
    const flights = this.props.flights[0];
    return (
      <>
        <h1>All Flights</h1>
        {flights.map((flight) => (
          <section>
            <Link
              to={{
                pathname: `/flights/${flight.id}`,
                id: flight.id,
              }}
            >
              {flight.flight_number}
            </Link>
            <p>
              Travelling from <strong>{flight.origin}</strong> to{" "}
              <strong>{flight.destination}</strong>{" "}
            </p>
            <p>Departure date: {flight.date}</p>
          </section>
        ))}
      </>
    );
  }
}
export default Flights;
