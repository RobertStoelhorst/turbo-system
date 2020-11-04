import React, { Component } from "react";
import axios from "axios";

import AirplaneList from './AirplaneList'


class Airplane extends Component {

  constructor () {
    super();
    this.state = {
      name: "",
      row: "",
      column: ""
    }
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeRow = this._handleChangeRow.bind(this);
    this._handleChangeColumn = this._handleChangeColumn.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleChangeName = (event) => {
    const { name, value } = event.target;
    console.log(event)
    this.setState({
      name: event.target.value,
    });
  };

  _handleChangeRow = (event) => {
    const { row, value } = event.target;
    console.log(event)
    this.setState({
      row: event.target.value,
    });
  };


  _handleChangeColumn = (event) => {
    const { column, value } = event.target;
    console.log(event)
    this.setState({
      column: event.target.value,
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
  var {name, row, column} = this.state
  return (
  <div class="container">
    <div class="form-group">
      <form onSubmit={this._handleSubmit}>
        <input class="form-control"
          placeholder="747"
          type="text"
          name="name"
          value={name}
          onChange={this._handleChangeName}
        />
        <input class="form-control"
          placeholder="28"
          type="string"
          row="row"
          value={row}
          onChange={this._handleChangeRow}
        />
        <input class="form-control"
          placeholder="4"
          type="integer"
          column="column"
          value={column}
          onChange={this._handleChangeColumn}
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
