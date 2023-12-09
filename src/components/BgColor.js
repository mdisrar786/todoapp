import React, { useState } from 'react';

const BgColor = () => {
  // State to manage the background color
  const [backgroundColor, setBackgroundColor] = useState('blue');

  // Function to handle button click and change the background color
  const handleButtonClick = () => {
    // Change the background color to a new value
    const newColor = backgroundColor === 'blue' ? 'green' : 'blue';
    setBackgroundColor(newColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: backgroundColor, padding: '10px', cursor: 'pointer' }}
        onClick={handleButtonClick}
      >
        Click me to change color
      </button>
    </div>
  );
};

export default BgColor;
