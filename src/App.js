import React from 'react';
import { ChartTest } from './components/Chart';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Radar Chart DEMO</header>
      <div>
        <ChartTest className='chart-container' />
      </div>
    </div>
  );
}

export default App;
