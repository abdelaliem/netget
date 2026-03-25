import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, Terminal, Map } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: LayoutGrid, label: 'Dashboard', path: '/dashboard' },
  { icon: Terminal, label: 'Web Terminal', path: '/terminal' },
  { icon: Map, label: 'Network Map', path: '/map' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r border-gray-200">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
          NG
        </div>
        <span className="text-2xl font-bold tracking-tight text-gray-900 leading-none">
          NET<span className="text-brand-orange">GET</span>
        </span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-brand-light text-brand-orange font-semibold shadow-sm'
                  : 'text-brand-gray hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[15px]">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
