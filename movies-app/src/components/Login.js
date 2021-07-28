import React, { useState } from 'react';

import { useAuthentication } from "../Authentication";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuthentication();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        if (isLoginDisabled) {
            return;
        }
        let response = await fetch('http://localhost:2295/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const userData = await response.json()
        await login(email);
    }

    const isLoginDisabled = !email || !password;

    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="login-form">
                    <label htmlFor="email"></label>
                    <input
                        type="text"
                        id="email"
                        onChange={handleEmailChange}
                        value={email}
                        placeholder="email"
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
                        placeholder="password"
                        required
                    />
                </div>
                <button className="login-button" disabled={isLoginDisabled} type="submit">
                    Click to login
                </button>
            </form>
        </>
    )
}

export default Login;