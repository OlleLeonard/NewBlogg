import React, { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useInput from "../hooks/useInput";

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameInput = useInput();

  console.log(nameInput.value);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="SignInBody">
      <div className="SignInContainerUp">
        <form onSubmit={signUp}>
          <h1>Create account</h1>
          <p>email</p>
          <input
            type="email"
            placeholder="enter mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <p>Lösenord:</p>
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <button type="submit">Sign Upp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
