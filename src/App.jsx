// App.js ou index.js
import React from 'react';
import { DataProvider } from './components/context/DataContext';
import Home from './pages/Home';

const App = () => {
  return (
    <DataProvider>
      <Home />
      
    </DataProvider>
  );
};

export default App;
