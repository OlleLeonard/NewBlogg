import useInput from "../hooks/useInput";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const SignIn = () => {
  const { setUserName } = useContext(UserContext);
  const nameInput = useInput();
  const emailInput = useInput();

  console.log(nameInput.value, emailInput.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserName(nameInput.value);

    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" {...nameInput}></input>

      <label>Email</label>
      <input type="Email" {...emailInput}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
