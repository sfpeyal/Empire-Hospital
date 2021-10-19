import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found-page">
            <div>
                <h1 className="text-danger">404</h1>
                <h2 className="text-danger">PAGE NOT FOUND!</h2>
            </div>
        </div>
    );
};

export default NotFound;