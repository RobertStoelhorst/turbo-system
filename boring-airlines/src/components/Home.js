import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (props) => {
  const handleClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
        props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {props.loggedInStatus ? null : <Link to="/login">Log In</Link>}
      <br></br>
      {props.loggedInStatus ? null : <Link to="/signup">Sign Up</Link>}
      <br></br>
      {props.loggedInStatus ? <Link to="/flights">All Flights</Link> : null}
      <br></br>
        {props.loggedInStatus ? <Link to="/flightsearch">Flight Search</Link> :null}
      <br></br>
      {props.loggedInStatus ? <Link to="/planes">Create Plane</Link> : null}
      <br></br>
      {props.loggedInStatus ? (
        <Link to="/logout" onClick={handleClick}>
          Log Out
        </Link>
      ) : null}

    </div>
  );
};
export default Home;
