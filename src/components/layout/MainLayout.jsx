import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-brand-light overflow-hidden font-sans antialiased text-gray-900">
      {/* Sidebar - Fixed width */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar - Fixed height */}
        <Topbar />

        {/* Dynamic Content - Scrollable */}
        <main className="flex-1 overflow-y-auto px-10 py-8">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>

        {/* Footer - Fixed height at bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
