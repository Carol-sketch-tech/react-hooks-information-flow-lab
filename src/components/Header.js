import React from 'react';

const Header = ({ isDarkMode, onDarkModeClick }) => (
  <header>
    <button onClick={onDarkModeClick}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  </header>
);

export default Header;
