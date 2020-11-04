import React, { Component } from "react";
import axios from "axios";

import AirplaneList from './AirplaneList'


class Airplane extends Component {

  constructor () {
    super();
    this.state = {
      name: "",
      rows: "",
      columns: ""
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    const { name, row, column } = this.state;
    let plane = {
      name: name,
      row: row,
      column: column
    };

    axios
      .post("http://localhost:3001/planes.json", { plane }).then((response) => {
        console.log(response)
      }).then(axios
        .get("http://localhost:3001/planes.json", { plane }).then((response) => {
          console.log(response)
        }))
      }

render() {
  var {name, columns, rows} = this.state
  return (
  <div class="container">
    <div class="form-group">
      <form onSubmit={this._handleSubmit}>
        <input class="form-control"
          placeholder="JFK"
          type="text"
          name="name"
          onChange={this._handleChange}
        />
        <input class="form-control"
          placeholder="a"
          type="integer"
          name="rows"

          onChange={this._handleChange}
        />
        <input class="form-control"
          placeholder="1"
          type="integer"
          name="columns"
          onChange={this._handleChange}
        />
        <button class="btn btn-primary" placeholder="submit" type="submit">
          Create Flight
        </button>
      </form>
  </div>
</div>


    )


  }


}

export default Airplane
