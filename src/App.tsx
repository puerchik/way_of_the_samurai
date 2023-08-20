import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { NavSidebar } from './components/NavSidebar';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <NavSidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;