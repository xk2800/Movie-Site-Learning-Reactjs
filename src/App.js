//import React from 'react';

//styles import from GlobalStyle.js
import Header from './components/Header';
import Home from './components/Home';
import {GlobalStyle} from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
