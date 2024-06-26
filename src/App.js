import React, { useState } from 'react';
import Paper from './Paper';
import ColourTheme from './ColourTheme';
import './App.css';

function App() {
  const [theme, setTheme] = useState(0);

  const handleThemeChange = (themeIndex) => {
    setTheme(themeIndex);
  };

  return (
    <div className="App">
      <ColourTheme theme={theme} onThemeChange={handleThemeChange} />
      <Paper theme={theme} />
    </div>
  );
}

export default App;
