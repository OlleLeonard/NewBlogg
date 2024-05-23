import useInput from "../hooks/useInput";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const SignIn = () => {
  const { setUserName } = useContext(UserContext);
  const nameInput = useInput();

  console.log(nameInput.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" {...nameInput}></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
