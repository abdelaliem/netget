import React from 'react';
import Button from '../components/ui/Button';

const NetworkMap = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE9] flex flex-col items-center pt-8 px-4 pb-12 w-full">

      {/* Welcome Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-[34px] font-black text-gray-900 mb-3 tracking-tight">
          Scan completed
        </h1>
        <p className="text-gray-500 text-sm md:text-[15px] max-w-xl mx-auto font-medium">
          Initial network scan completed successfully. Here are the results.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center gap-1">
          <span className="text-[28px] font-black text-brand-orange mb-1">15</span>
          <span className="text-[15px] font-bold text-gray-900 text-center">Devices discovered</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center gap-1">
          <span className="text-[28px] font-black text-brand-orange mb-1">28</span>
          <span className="text-[15px] font-bold text-gray-900 text-center">Open ports</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col items-center justify-center gap-1">
          <span className="text-[28px] font-black text-brand-orange mb-1">3</span>
          <span className="text-[15px] font-bold text-gray-900 text-center">Vulnerabilities found</span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-4 w-full flex-wrap justify-center">
        <Button
          variant="ghost"
          className="!bg-white hover:!bg-[#F2D7C4] !text-brand-orange hover:!text-gray-900 shadow-none !border-none sm:w-[320px] !rounded-2xl py-4 text-[15px] !font-bold transition-colors"
        >
          View network map
        </Button>
        <Button
          variant="secondary"
          className="!bg-white hover:!bg-[#F2D7C4] !text-brand-orange hover:!text-gray-900  shadow-none !border-none sm:w-[320px] !rounded-2xl py-4 text-[15px] !font-bold transition-colors"
        >
          Run vulnerabilities scan
        </Button>
      </div>

      {/* Area for future network map */}
      <div className="w-full mt-16 flex flex-col items-center w-full max-w-6xl">
        {/* Future component will go here */}
      </div>

    </div>
  );
};

export default NetworkMap;