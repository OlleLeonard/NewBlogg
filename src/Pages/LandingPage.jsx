import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import PageLayout from "../components/PageLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const LandingPage = () => {
  const { userName } = useContext(UserContext);
  const [showSignUp, setShowSignUp] = useState(true);

  const handleCreateClick = () => {
    setShowSignUp(false);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };

  return (
    <PageLayout title="Home" headline={`Hello ${userName}!`}>
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
