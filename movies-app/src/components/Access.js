import React from 'react';

function LogIn() {
    return (
        <>
            <h2><a href="http://localhost:2295/auth/logout">Login</a></h2>
        </>
    )
}

function LogOut() {
    return (
        <>
            <h2><a href="http://localhost:2295/auth/logout">Log Out</a></h2>
        </>
    )
}

export { LogIn, LogOut };