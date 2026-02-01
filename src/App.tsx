import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './MenuContext';
import { Menu } from './Menu';
import { Dashboard } from './Dashboard';

function App() {
  return (
    <MenuProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;
