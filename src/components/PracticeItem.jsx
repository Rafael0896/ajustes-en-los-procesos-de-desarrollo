import React from 'react';

const PracticeItem = ({ text }) => (
    <div className="practice-item">
        <span className="checkmark">✓</span>
        <div>{text}</div>
    </div>
);

export default PracticeItem;