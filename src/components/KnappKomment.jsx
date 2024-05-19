import React, { useState } from "react";
import MinKommentar from "./MinKommentar";

const KommenteraKnapp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Center">
      <div>
        <button onClick={toggleVisibility}>Kommentera</button>
        {isOpen ? (
          <div>
            <MinKommentar />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default KommenteraKnapp;
