import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Flights from "./Flights";
import NotFound from "./NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      admin: false,
      flights: [],
    };
  }

  addNewFlight = (flightData) => {
    this.setState((prevState) => ({
      flights: [...prevState, flightData],
    }));
  };

  fetchFlights = async () => {
    const resp = await axios.get("http://localhost:3001/flights.json");
    console.log(resp);
  };

  componentDidMount() {
    this.loginStatus();
    this.fetchFlights();
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null;
  }

  loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
    if (data.user.admin) {
      this.setState({
        admin: true,
      });
    }
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/flights"
              render={(props) => (
                <Flights
                  {...props}
                  addNewFlight={this.addNewFlight}
                  fetchFlights={this.fetchFlights}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
