import React, { useState } from 'react';

const LoginForm = ({
    sampleEmail,
    error,
    name,
    password,
    setName,
    setEmail,
    setPassword,
    handleSubmit,
}) => {
    return (
        <div onSubmit={handleSubmit}>
            <form className="container">
                <h1>Login</h1>
                {error !== '' ? <div className="error">{error}</div> : ''}
                <div className="input-container">
                    <i className="fa fa-user icon"></i>
                    <input
                        type="Name"
                        placeholder="Name"
                        name="name"
                        className="input-field"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <i className="fa fa-envelope icon"></i>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input-field"
                        required
                        value={sampleEmail}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <i className="fa fa-key icon"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input-field"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                Remember me
                <input type="submit" className="bttn" />
            </form>
        </div>
    );
};

export default LoginForm;
