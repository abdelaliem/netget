import React from 'react';
import { Ban, RotateCw } from 'lucide-react';

const HomeFirstScan = () => {
  const nodes = [
    {
      name: 'Main Core Switch',
      ip: '192.168.1.1',
      role: 'Switch',
      state: 'ok',
    },
    {
      name: 'NET Router',
      ip: '192.168.1.1',
      role: 'Router',
      state: 'ok',
    },
    {
      name: 'MBP-Admin-X1',
      ip: '192.168.1.10',
      role: 'Client',
      state: 'scanning',
    },
    {
      name: 'HP-OfficeJet-600',
      ip: '192.168.1.12',
      role: 'Printer',
      state: 'scanning',
    },
  ];

  return (
    <div className="mx-auto h-full w-full max-w-[1120px]">
      <div className="grid h-full min-h-[640px] grid-cols-1 gap-4 rounded-none bg-[#efe8e5] p-4 lg:grid-cols-[1fr_300px]">
        <section className="flex flex-col gap-4">
          <div className="rounded-xl bg-white px-8 py-10">
            <div className="mx-auto max-w-[500px] text-center">
              <div className="mb-3">
                <div className="text-6xl font-black tracking-tight text-brand-orange">65%</div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Overall</div>
              </div>

              <div className="my-10 flex justify-center">
                <div className="h-2 w-2 rounded-full bg-brand-orange/60" />
              </div>

              <h2 className="text-4xl font-black text-gray-900">Scanning Subnet: 192.168.1.0/24</h2>
              <p className="mt-2 text-xl font-medium text-gray-400">Current Phase: Deep Packet Inspection</p>

              <div className="mt-6">
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[65%] bg-brand-orange" />
                </div>
                <div className="mt-2 grid grid-cols-4 text-[10px] font-bold uppercase tracking-wide text-gray-400">
                  <span className="text-brand-orange">Initializing</span>
                  <span className="text-brand-orange">Identifying Hosts</span>
                  <span className="text-gray-500">Inspection</span>
                  <span>Completing</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button className="inline-flex min-w-[160px] items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-base font-bold text-white shadow-md shadow-brand-orange/30 transition hover:bg-orange-600">
                  <Ban size={16} />
                  Cancel Scan
                </button>
                <button className="inline-flex min-w-[160px] items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-bold text-gray-700 transition hover:bg-gray-50">
                  Pause Scan
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">Devices Found</div>
              <div className="mt-1 text-5xl font-black text-gray-900">14</div>
            </div>
            <div className="rounded-xl bg-white p-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">Alerts</div>
              <div className="mt-1 text-5xl font-black text-brand-orange">02</div>
            </div>
          </div>
        </section>

        <aside className="rounded-xl bg-white p-3">
          <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-3">
            <h3 className="text-sm font-bold text-gray-800">Discovered Nodes</h3>
            <span className="rounded bg-orange-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
              Real-time
            </span>
          </div>

          <div className="space-y-2">
            {nodes.map((node) => (
              <div key={node.name} className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-gray-800">{node.name}</div>
                    <div className="text-[10px] text-gray-400">
                      {node.ip} - {node.role}
                    </div>
                  </div>
                  <div className="mt-0.5 shrink-0">
                    {node.state === 'ok' ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-green-200 bg-green-50 text-xs text-green-600">
                        ✓
                      </span>
                    ) : (
                      <RotateCw size={15} className="animate-spin text-brand-orange" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomeFirstScan;