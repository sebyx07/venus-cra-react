import React from 'react';
import './App.scss';
import Live from './common/Live';
import { PageTitle } from './common/PageTitle';
import HotLinks from './common/HotLinks';

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <PageTitle />
        <Live />
        <HotLinks />
      </div>
    </div>
  );
}

export default App;
