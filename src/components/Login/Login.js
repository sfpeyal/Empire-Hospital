import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, LoginProcess, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

    }

    return (
        <div className="form-container container d-flex justify-content-center align-items-center">
            <div className="w-50">
                <form onSubmit={LoginProcess}>
                    <h1 className="fst-italic text-danger">Login</h1>
                    <br />
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3 text-danger"><h6>{error}</h6></div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <br />
                    <br />
                    <p>Create Account?<Link to="/registration"> Go Here</Link></p>
                </form>
                <div>
                    <button onClick={handleGoogleLogin} type="submit" className="btn btn-primary">Login with Google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;