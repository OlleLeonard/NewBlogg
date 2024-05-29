import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

import bild from "../Pictures/lejon.jpg";

const UserName = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <p className="Lion">
      <img src={bild} alt="lejon" />
      {`${authUser ? authUser.email : "Not signed in"}`}
    </p>
  );
};

export default UserName;
