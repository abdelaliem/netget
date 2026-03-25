import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WebTerminal from './pages/WebTerminal';
import NetworkMap from './pages/NetworkMap';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/terminal" element={<WebTerminal />} />
          <Route path="/map" element={<NetworkMap />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
