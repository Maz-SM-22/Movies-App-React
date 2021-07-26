import React, { useState } from 'react';

import { useAuthentication } from "../Authentication";

function Login() {
    const [isNewUser, setIsNewUser] = useState(false);

    function handleSubmit() {

    }

    const isLoginDisabled = !username || !password;

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="login-form">
                    <label htmlFor="username"></label>
                    <input
                        type="text"
                        id="username"
                        onChange={handleUsernameChange}
                        value={username}
                    />
                </div>
                <div className="login-form">
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        id="email"
                        onChange={handleUsernameChange}
                        value={email}
                        required
                    />
                </div>
                <div className="login-form">
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        onChange={handlePasswordChange}
                        value={password}
                        required
                    />
                </div>
                <button disabled={isLoginDisabled} type="submit">
                    Click to login
                </button>
            </form>
        </>
    )
}

export { Login };