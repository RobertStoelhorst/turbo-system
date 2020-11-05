import React, { Component } from "react";
import { Link } from "react-router-dom";


class Booking extends Component {
  constructor() {
    super();
  }

    render() {
      return(
      <div class="container">
      <div class="form-group">
        <h2 class="text-muted">Make Reservation</h2>
        <form>
        <h4 class="text-muted">Passenger Details:</h4>
        <input class="form-control"
          placeholder="Title"
          type="text"
          name=""
          required
          onChange={this.handleChange}
        />
        <input class="form-control"
          placeholder="First Name"
          type="text"
          name=""
          required
          onChange={this.handleChange}
        />
        <input class="form-control"
          placeholder="Last Name"
          type="text"
          name="email"
          required
          onChange={this.handleChange}
        />
        <br/>
        <label  class="text-muted">Date of Birth</label>
        <br/>
          <input class="form-control" type="date" id="birthday" name="birthday" required></input>
          <br/>
          <input class="btn btn-primary" type="submit" value="Next" />
        </form>
        </div>
      </div>
    );
  }
}

export default Booking
