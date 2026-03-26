import React, { memo } from 'react';

/**
 * Reusable StatCard component for dashboard metrics.
 * Optimized with React.memo for high-performance rendering.
 */
const StatCard = memo(({
  title,
  value,
  suffix,
  icon: Icon,
  progress,
  statusText,
  statusColor = 'text-brand-green'
}) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{title}</h3>
        {Icon && <Icon size={16} className="text-brand-orange" />}
      </div>

      <div className="mb-3 flex items-baseline gap-1">
        <span className="text-2xl font-black text-gray-900">{value}</span>
        {suffix && <span className="text-xs font-semibold text-gray-400">{suffix}</span>}
      </div>

      {progress !== undefined && (
        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-auto">
          <div
            className="bg-brand-orange h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {statusText && (
        <div className={`text-[10px] font-bold uppercase mt-auto ${statusColor}`}>
          {statusText}
        </div>
      )}
    </div>
  );
});

StatCard.displayName = 'StatCard';

export default StatCard;
