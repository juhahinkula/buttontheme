import React from 'react';
import Header from './Header';
import ThemeContext from './ThemeContext';

/**
 * You can find the ThemeContext.js file that creates context. 
 * In the App.js file there is two themes 
 * for HeaderButton component (blue and black). 
 * You should create context provider in the App.js file. 
 * Then use context in the HeaderButton.js file 
 * and set the button's style using the context value. 
 * If you change the value, you should see blue or black button.
 */

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {
  return (
    <ThemeContext.Provider value={buttonThemes.black}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;