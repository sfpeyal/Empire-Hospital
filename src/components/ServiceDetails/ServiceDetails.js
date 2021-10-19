import React from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { servicedetailsId } = useParams();

    return (
        <div className="details-container">
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <h1>A Specific Route For Service NO:-{servicedetailsId}</h1>
        </div>
    );
};

export default ServiceDetails;