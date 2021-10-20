import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Registration.css'

const Registration = () => {

    const { handleEmailChange, handlePasswordChange, handleRegistration } = useAuth();


    return (
        <div className="form-container container d-flex justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="fst-italic text-danger">Registration</h1>
                <br />
                <form onSubmit={handleRegistration}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Registr</button>
                    <br />
                    <br />
                    <p>Already have an Account?<Link to="/login"> Go Here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;