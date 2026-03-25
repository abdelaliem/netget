import React from 'react';
import { Search, Bell } from 'lucide-react';
import Button from '../ui/Button';

const Topbar = () => {
  return (
    <div className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
          <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
          <span className="text-xs font-bold text-brand-green tracking-wider uppercase">CONNECTED</span>
        </div>
        <div className="flex items-center gap-1.5 text-brand-gray text-xs font-medium">
          <span className="opacity-70">LATENCY:</span>
          <span className="text-brand-orange">14ms</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-5 mr-2">
          <button className="text-brand-gray hover:text-gray-900 transition-colors">
            <Search size={22} strokeWidth={2} />
          </button>
          <button className="text-brand-gray hover:text-gray-900 transition-colors relative">
            <Bell size={22} strokeWidth={2} />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-brand-orange rounded-full border-2 border-white" />
          </button>
        </div>
        
        <Button variant="primary" size="md">
          Scan Network
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
