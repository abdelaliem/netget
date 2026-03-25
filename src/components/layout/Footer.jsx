import React from 'react';
import { User } from 'lucide-react';

const Footer = () => {
  return (
    <div className="h-16 bg-white border-t border-gray-100 flex items-center justify-between px-8 text-xs font-medium text-brand-gray uppercase tracking-wider">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-brand-gray">
            <User size={18} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-bold text-gray-900 normal-case">User Admin</span>
            <span className="text-[9px] opacity-70 normal-case">Network Management System</span>
          </div>
        </div>
        <div className="h-8 w-[1px] bg-gray-100 mx-2" />
        <div className="flex items-center gap-2 lowercase italic">
          <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
          <span>Agent Online: 10.0.0.1</span>
        </div>
        <div className="h-8 w-[1px] bg-gray-100 mx-2" />
        <span className="lowercase italic">Build: 2.4.0-stable</span>
      </div>

      <div className="flex items-center gap-6 normal-case font-semibold">
        <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-brand-orange transition-colors">API Keys</a>
      </div>
    </div>
  );
};

export default Footer;
