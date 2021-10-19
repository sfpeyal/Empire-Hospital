import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from './../../../Hooks/useAuth';
import './PrivateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, Loading } = useAuth();
    if (Loading) {
        return <div>
            <br />
            <br />
            <br />
            <Spinner animation="border" variant="dark" />
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >
        </Route>
    );
};

export default PrivateRoute;