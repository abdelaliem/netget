import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WebTerminal from './pages/WebTerminal';
import NetworkMap from './pages/NetworkMap';
import HomeFirstScan from './pages/HomeFirstScan';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <MainLayout>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/terminal" element={<WebTerminal />} />
              <Route path="/map" element={<NetworkMap />} />
              <Route path="/homefirstscan" element={<HomeFirstScan />} />
              <Route path="/scan-network" element={<HomeFirstScan />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;