import React from 'react';
import './App.scss';
import AppNavbar from '../Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">

      <AppNavbar />

      <h1>Hello, World!</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
};

export default App;
