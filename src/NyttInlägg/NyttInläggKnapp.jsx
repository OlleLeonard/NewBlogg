import NyttInlägg from "./NyttInlägg";
import React, { useState } from "react";
import "./NyttInläggStyle.css";

const NyttKnapp = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="Center">
      <div>
        <button onClick={handleClick}>Nytt Inlägg</button>
        {isClicked ? <NyttInlägg /> : null}
      </div>
    </div>
  );
};

export default NyttKnapp;
