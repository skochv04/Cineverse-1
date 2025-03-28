import React from 'react';
import './styles/Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading data, please wait...</p>
        </div>
    );
};

export default Loading;
