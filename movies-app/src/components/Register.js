import React, { useState } from 'react';

import { useAuthentication } from "../Authentication";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuthentication();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            username,
            email,
            password
        }
    };

    async function handleSubmit() {
        if (isLoginDisabled) {
            return;
        }
        let response = await fetch('http://localhost:2295/auth/register', options);
        const userData = await response.json()
        await login(email);
    }

    const isLoginDisabled = !username || !password;

    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <h2>Register</h2>
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
                        onChange={handleEmailChange}
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
                <button className="login-button" disabled={isLoginDisabled} type="submit">
                    Click to register and login
                </button>
            </form>
        </>
    )
}

export default Register;