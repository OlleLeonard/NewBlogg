import React, { useState } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import useInput from "../hooks/useInput";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserName } = useContext(UserContext);
  const nameInput = useInput();

  console.log(nameInput.value);

  const signUp = (e) => {
    e.preventDefault();
    setUserName(nameInput.value);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredientials) => {
        console.log(userCredientials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="SignInContainer">
      <form onSubmit={signUp}>
        <h1>Create account</h1>
        <input type="text" {...nameInput}></input>

        <input
          type="email"
          placeholder="enter mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Upp</button>
      </form>
    </div>
  );
};
export default SignUp;
