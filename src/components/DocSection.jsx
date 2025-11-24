import React from 'react';

const DocSection = ({ title, children }) => (
    <div className="doc-section">
        <h3 className="doc-title">{title}</h3>
        {children}
    </div>
);

export default DocSection;