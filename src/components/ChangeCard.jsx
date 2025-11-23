import React from 'react';

const ChangeCard = ({ title, description }) => (
    <div className="grid-card">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
    </div>
);

export default ChangeCard;