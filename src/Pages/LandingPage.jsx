import React, { useState, useEffect } from "react";

import PageLayout from "../components/PageLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const LandingPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

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

  const handleCreateClick = () => {
    setShowSignUp(true);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };

  return (
    <PageLayout>
      <div className="Landing">
        {showSignUp ? (
          <SignUp onClose={handleSignUpClose} />
        ) : (
          <SignIn onCreateClick={handleCreateClick} />
        )}
      </div>
    </PageLayout>
  );
};

export default LandingPage;
