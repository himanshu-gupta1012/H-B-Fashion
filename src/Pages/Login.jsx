import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        alert('Login UI Working!');
    };

    return (
        <div className="login-page">

            <form className="login-form" onSubmit={handleLogin}>

                <h1>Welcome Back</h1>
                <p>Login to your H&B Fashion account</p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>

                <p>
                    Don't have an account?
                    <Link to="/signup"> Sign Up</Link>
                </p>

            </form>

        </div>
    );
};

export default Login;