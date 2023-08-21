import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NavSidebar } from './components/NavSidebar/NavSidebar';
import { Main } from './components/Main/Main';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { Music } from './components/Music/Music';
import { News } from './components/News/News';
import { Settings } from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="mainWrapper">
          <NavSidebar />
          <Route path='/main' component={Main} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;