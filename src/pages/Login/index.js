import { useState } from "react";
import React from "react";
import "./styles.css";
//destructiong props allos us to not sya props.user
const Login = ({ setUser }) => {
  //mx auto centers it
  //once user clicks submiy  we will mimic loggin in and conditionally render pur nav bar
  // must add e paramaater in the funtions or tehy will not knowe when to fire
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="Login-form"
      className="mx-auto border p-2 m-2"
    >
      <div className="mb-3">
        <label htmlFor="exampleInputUser1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
        <div id="userHelp" className="form-text">
          We'll never share your user with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
