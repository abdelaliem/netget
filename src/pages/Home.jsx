import React from 'react';
import { Info } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white py-12 px-20 rounded-3xl shadow-xl shadow-brand-orange/5 border border-gray-100 flex flex-col items-center max-w-2xl text-center">
        <div className="w-20 h-20 bg-brand-orange rounded-3xl flex items-center justify-center mb-8 rotate-12 shadow-lg shadow-brand-orange/30">
          <Info size={48} color="white" strokeWidth={2.5} className="-rotate-12" />
        </div>

        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          No network scan found
        </h1>

        <p className="text-brand-gray text-lg leading-relaxed mb-10 max-w-md">
          It looks like no network scan has been conducted yet.
          Start by scanning your network to discover connected devices
        </p>

        <Button variant="primary" size="lg">
          Scan Network
        </Button>
      </div>
    </div>
  );
};

export default Home;
