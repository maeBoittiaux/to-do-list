import React, { useState } from 'react';
import './ButtonGroup.css';

const ButtonGroup = () => {
    // State Management
    // useState : to manage the state of the active button
    // activeButton : variable to hold index of active button
    // setActiveButton : function to update activeButton state
    const [activeButton, setActiveButton] = useState(null);

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
                    className={`spherical-button ${activeButton === buttonIndex ? 'active' : ''}`}
                    onClick={() => handleButtonClick(buttonIndex)}
                >
                    Button {buttonIndex + 1}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;
