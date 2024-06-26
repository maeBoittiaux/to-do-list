import React from 'react';
import './Paper.css';

const Paper = ({ theme }) => {
    return (
        <div className={`paper theme-${theme}`}>
            <h1 className="title">To-Do List</h1>
            <div className="hole top-hole"></div>
            <div className="hole bottom-hole"></div>
        </div>
    );
};

export default Paper;