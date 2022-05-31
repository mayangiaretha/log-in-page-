import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './login.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const Logout = () => {
        setEmail('');
        setName('');
        setPassword('');
        setLoggedIn(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoggedIn(true);
    };

    console.log(loggedIn, 'logged in ==========>');

    return (
        <div className="content">
            <div className="FARM">
                {name !== '' && loggedIn ? (
                    <div className="welcome">
                        <h2>
                            welcome,<span> {name}</span>
                        </h2>
                        <button onClick={Logout}>Logout</button>
                    </div>
                ) : (
                    <LoginForm
                        error={error}
                        sampleEmail={email}
                        name={name}
                        password={password}
                        setName={setName}
                        setPassword={setPassword}
                        setEmail={setEmail}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default Login;
