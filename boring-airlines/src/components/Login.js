import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
{ /* import 'bootstrap/dist/css/bootstrap.min.css'; */ }

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = this.state;
    let user = {
      username: username,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3001/login", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  redirect = () => {
    this.props.history.push("/");
  };

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div class="container">
        <div class="form-group">
          <h1 class="text-muted">Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <input class="form-control"
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <input class="form-control"
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <input class="form-control"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <button class="btn btn-primary" placeholder="submit" type="submit">
              Log In
            </button>
            <div>
              <Link class="btn btn-primary" to="/signup">sign up</Link>
            </div>
          </form>
          <div>{this.state.errors ? this.handleErrors() : null}</div>
        </div>
      </div>
    );
  }
}
export default Login;
