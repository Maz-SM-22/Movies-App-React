import React, { useState, useContext } from 'react';

const AuthenticationContext = React.createContext();

export const AuthenticationProvider = ({ children }) => {
    const [authenticationData, setAuthenticationData] = useState({});

    function login(email) {
        setAuthenticationData({
            email
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