import React, { useContext, useState } from "react";

/* I'm noting this down because I will deffo forget it before the next session 
    The login function here need to make a POST request to the backend login 
    THEN if the login is successful, you do the fropnt end login function

    btw all the below needs editing.
*/ 

const AuthenticationContext = React.createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authenticationData, setAuthenticationData] = useState({});

  async function authenticateLogin() {
    const response = await fetch('localhost:2295/login'); 
  }
  
  function login(username) {
    setAuthenticationData({
      username
    });
  }

  function logout() {
    setAuthenticationData({});
  }

  const value = {
    authenticationData,
    login,
    logout
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);