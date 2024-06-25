import React, { useState } from 'react';
import './ColourTheme.css';

const ButtonGroup = () => {
    // State Management
    // useState : to manage the state of the active button
    // activeButton : variable to hold index of active button
    // setActiveButton : function to update activeButton state
    const [activeButton, setActiveButton] = useState(0);

    // function is called when a button clicked
    // takes index of button clicked and sets it as active button
    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };

    return (
        // button container
        <div className="button-group">
            {[0, 1, 2].map((buttonIndex) => (
                <button
                    key={buttonIndex}
                    className={`colour-theme-button button-${buttonIndex} ${activeButton === buttonIndex ? 'active' : ''}`}
                    onClick={() => handleButtonClick(buttonIndex)}
                >
                    {buttonIndex + 1}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;
