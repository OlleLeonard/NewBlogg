import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "./components.css";

const LionAndName = () => {
  const { userName, picture } = useContext(UserContext);

  return (
    <div className="Lion">
      <img src={picture} />
      <p className="white">{userName}</p>
    </div>
  );
};
export default LionAndName;
