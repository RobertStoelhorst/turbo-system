import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Flights from "./Flights";
import Flight from "./Flight";
import Airplane from "./Airplane";
import NotFound from "./NotFound";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>;

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
      flights: [...prevState.flights, flightData],
    }));
  };

  fetchFlights = async () => {
    const resp = await axios.get("http://localhost:3001/flights.json", {
      withCredentials: true,
    });
    // console.log(resp.data);
    this.setState({
      flights: [...this.state.flights, resp.data],
    });
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
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand bg-light" href="/">
            ✈️ BoringAir
          </a>
        </nav>
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
                  flights={this.state.flights}
                  addNewFlight={this.addNewFlight}
                  fetchFlights={this.fetchFlights}
                />
              )}
            />
            <Route path="/flights/:flightID" component={Flight} />
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
            <Route
              exact
              path="/planes"
              render={(props) => (
                <Airplane {...props} loggedInStatus={this.state.isLoggedIn} />
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
