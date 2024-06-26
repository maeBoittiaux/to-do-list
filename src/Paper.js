import React, { useState } from 'react';
import './Paper.css';

const Paper = ({ theme }) => {
    const [showPen, setShowPen] = useState(false);

    const handleMouseEnter = () => {
        setShowPen(true);
        setTimeout(() => {
            setShowPen(false);
        }, 3000);
    };

    return (
        <div className={`paper theme-${theme}`}>
            <div className="title-container" onMouseEnter={handleMouseEnter}>
                <h1 className="title">To-Do List</h1>
                {showPen && <span className="pen">&#9998;</span>}
            </div>
            <div className="hole top-hole"></div>
            <div className="hole bottom-hole"></div>
        </div>
    );
};

export default Paper;