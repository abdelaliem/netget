import React from 'react';

const NetworkMap = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Network Map</h1>
      <p className="text-brand-gray max-w-md mb-6">Visual representation of your network topology will be displayed here once a scan is completed.</p>
    </div>
  );
};

export default NetworkMap;
