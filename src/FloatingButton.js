import React from 'react';
import './FloatingButton.css';

const FloatingButton = ({ onClick }) => {
    return (
        <button className="floating-button" onClick={onClick}>
            Connect with All
        </button>
    );
};

export default FloatingButton;
