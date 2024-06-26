import React, { useState } from 'react';
import './Paper.css';

const Paper = ({ theme }) => {
    const [showPen, setShowPen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("To-Do List");

    const handleMouseEnter = () => {
        setShowPen(true);
        setTimeout(() => {
            setShowPen(false);
        }, 3000);
    };

    const handlePenClick = () => {
        setIsEditing(true);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTitleBlur = () => {
        setIsEditing(false);
    };

    return (
        <div className={`paper theme-${theme}`}>
            <div className="title-container" onMouseEnter={handleMouseEnter}>
                {isEditing ? (
                    <input
                        className="title-input"
                        value={title}
                        onChange={handleTitleChange}
                        onBlur={handleTitleBlur}
                        autoFocus
                    />
                ) : (
                    <>
                        <h1 className="title">{title}</h1>
                        {showPen && <span className="pen" onClick={handlePenClick}>&#9998;</span>}
                    </>
                )}
            </div>
            <div className="hole top-hole"></div>
            <div className="hole bottom-hole"></div>
        </div>
    );
};

export default Paper;
