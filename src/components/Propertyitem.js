import React from 'react';
import axios from 'axios';

const PropertyItem = ({ property }) => {
    const handleInterest = async () => {
        try {
            await axios.post(`/api/properties/interest/${property._id}`, {}, {
                headers: { Authorization: localStorage.getItem('token') }
            });
            alert('Interest registered');
        } catch (error) {
            alert('Error registering interest');
        }
    };

    return (
        <div>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <button onClick={handleInterest}>I'm Interested</button>
        </div>
    );
};

export default PropertyItem;
