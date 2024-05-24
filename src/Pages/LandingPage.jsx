import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import PageLayout from "../components/PageLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import AuthDetails from "../components/AuthDetails";
import { auth } from "../Firebase";

const LandingPage = () => {
  const { userName } = useContext(UserContext);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!auth.currentUser);
  }, []);

  const handleCreateClick = () => {
    setShowSignUp(true);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };

  return (
    <PageLayout title="Home" headline={`Hello ${userName}!`}>
      <div className="Landing">
        <AuthDetails /> {}
        {isLoggedIn ? (
          <SignIn onCreateClick={handleCreateClick} />
        ) : (
          <SignUp onClose={handleSignUpClose} />
        )}
      </div>
    </PageLayout>
  );
};

export default LandingPage;
