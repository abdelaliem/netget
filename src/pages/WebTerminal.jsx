import React from 'react';
import { Cpu, Server, HardDrive, Clock } from 'lucide-react';
import StatCard from '../components/ui/StatCard';
import TerminalScreen from '../components/ui/TerminalScreen';
const WebTerminal = () => {
  return (
    <div className="flex flex-col max-w-6xl mx-auto py-6">
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="CPU USAGE"
          value="12.4"
          suffix="%"
          icon={Cpu}
          progress={12.4}
        />
        <StatCard
          title="MEMORY"
          value="4.2 GB"
          suffix="/ 16 GB"
          icon={Server}
          progress={(4.2 / 16) * 100}
        />
        <StatCard
          title="DISK I/O"
          value="1.2"
          suffix="MB/s"
          icon={HardDrive}
          progress={10}
        />
        <StatCard
          title="UPTIME"
          value="42d 12h"
          icon={Clock}
          statusText="NO INCIDENTS REPORTED"
        />
      </div>

      {/* Terminal Section */}
      <TerminalScreen />


    </div>
  );
};

export default WebTerminal;
