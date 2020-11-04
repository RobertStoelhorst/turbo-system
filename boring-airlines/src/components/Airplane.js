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
    this.props.onSubmit(this.state);
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
  <div>
    <form onSubmit={this._handleSubmit}>
      <input
        placeholder="JFK"
        type="text"
        name="name"
        onChange={this._handleChange}
      />
      <input
        placeholder="a"
        type="integer"
        name="row"

        onChange={this._handleChange}
      />
      <input
        placeholder="1"
        type="integer"
        name="column"
        onChange={this._handleChange}
      />
      <button placeholder="submit" type="submit">
        Create Flight
      </button>
    </form>
</div>


    )


  }


}

export default Airplane
