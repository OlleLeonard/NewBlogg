import React, { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./components.css";

const SignIn = ({ onCreateClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="SignInBody">
      <div className="SignInContainer">
        <form onSubmit={signIn}>
          <h1>Sign In</h1>
          <p>Email:</p>
          <input
            type="email"
            placeholder="enter mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <p>Lösenord:</p>
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button type="submit">Log In</button>
          <button type="button" onClick={onCreateClick}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
