import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext"; // Anta att du har en AuthContext för autentisering
import PageLayout from "../components/PageLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const LandingPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCreateClick = () => {
    setShowSignUp(true);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };

  return (
    <PageLayout
      title="Home"
      headline={`Hello ${user ? user.userName : "Guest"}!`}
    >
      <div className="Landing">
        {user ? (
          <button onClick={logout}>Logout</button> // Om användaren är inloggad, visa en knapp för utloggning
        ) : showSignUp ? (
          <SignUp onClose={handleSignUpClose} />
        ) : (
          <SignIn onCreateClick={handleCreateClick} />
        )}
      </div>
    </PageLayout>
  );
};

export default LandingPage;
