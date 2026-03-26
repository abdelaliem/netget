import React from 'react';
import { ArrowRight, Check, BookOpen, Headset, PlayCircle, Target } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const NetworkMap = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto py-6 px-4">

      {/* Welcome Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-black text-brand-dark mb-2">
          Welcome to <span className="text-brand-orange">NETGET</span>
        </h1>

        <p className="text-brand-gray text-base max-w-xl mx-auto leading-relaxed">
          Start by scanning your network to discover devices and build your
          topology. Your journey to intelligence begins here.
        </p>
      </div>


      {/* Main Discovery Panel */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg shadow-brand-orange/5 border border-gray-100 p-8 mb-6 flex flex-col items-center text-center">

        {/* Central Icon */}
        <div className="mb-4 relative">
          <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center shadow-md shadow-brand-orange/20">
            <Target className="text-white" size={32} />
          </div>

          <div className="absolute inset-0 border-2 border-brand-orange/10 rounded-2xl scale-110 animate-pulse"></div>
        </div>


        <h2 className="text-2xl font-black text-brand-dark mb-2">
          Network Discovery
        </h2>


        <p className="text-brand-gray text-base max-w-sm mb-6 leading-relaxed">
          Deep-packet inspection to identify every node, switch, and endpoint.
        </p>


        <Button
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          className="mb-6 text-base py-3 px-6"
        >
          Initialize Network Scan
        </Button>


        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-4 border-t border-gray-50 pt-6 w-full">

          <div className="flex items-center gap-2 text-xs font-bold text-brand-gray">
            <div className="bg-brand-green/10 p-1 rounded-full text-brand-green">
              <Check size={12} strokeWidth={3} />
            </div>
            ZERO CONFIG
          </div>


          <div className="flex items-center gap-2 text-xs font-bold text-brand-gray">
            <div className="bg-brand-green/10 p-1 rounded-full text-brand-green">
              <Check size={12} strokeWidth={3} />
            </div>
            REAL-TIME
          </div>


          <div className="flex items-center gap-2 text-xs font-bold text-brand-gray">
            <div className="bg-brand-green/10 p-1 rounded-full text-brand-green">
              <Check size={12} strokeWidth={3} />
            </div>
            SECURE
          </div>

        </div>
      </div>


      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">

        <Card
          icon={BookOpen}
          title="Documentation"
          description="Learn how to optimize your network mapping results"
        />

        <Card
          icon={Headset}
          title="Contact support"
          description="Get help from our network engineering 24/7"
        />

        <Card
          icon={PlayCircle}
          title="Quick Tutorial"
          description="Watch a 2-minute overview of dashboard features"
        />

      </div>

    </div>
  );
};

export default NetworkMap;