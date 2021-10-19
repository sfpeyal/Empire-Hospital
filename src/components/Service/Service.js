import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, picture, info } = props.service;
    const url = `/servicedetails/${id}`;
    return (
        <div className="service-container">
            <div className="">
                <img className="service-img" src={picture} alt="" />
            </div>
            <div className="">
                <h4>Name: {name}</h4>
                <p>Commited: {info}</p>
                <Link to={url}><button type="button" className="btn btn-primary">More Info</button></Link>
            </div>
        </div>
    );
};

export default Service;