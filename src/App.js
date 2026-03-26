import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WebTerminal from './pages/WebTerminal';
import NetworkMap from './pages/NetworkMap';
import HomeFirstScan from './pages/HomeFirstScan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/terminal" element={<WebTerminal />} />
              <Route path="/map" element={<NetworkMap />} />
              <Route path="/homefirstscan" element={<HomeFirstScan />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;