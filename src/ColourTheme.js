import React from 'react';
import './ColourTheme.css';

const ColourTheme = ({ theme, onThemeChange }) => {
    const handleButtonClick = (buttonIndex) => {
        onThemeChange(buttonIndex);
    };

    return (
        <div className="button-group">
            {[0, 1, 2].map((buttonIndex) => (
                <button
                    key={buttonIndex}
                    className={`colour-theme-button button-${buttonIndex} ${theme === buttonIndex ? 'active' : ''}`}
                    onClick={() => handleButtonClick(buttonIndex)}
                >
                    <div className="horizontal-lines">
                        <div className="horizontal-line"></div>
                        <div className="horizontal-line"></div>
                        <div className="horizontal-line"></div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ColourTheme;