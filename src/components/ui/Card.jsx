import React, { memo } from 'react';

/**
 * Reusable Card component for landing sections.
 * Optimized with React.memo for high-performance rendering.
 */
const Card = memo(({ icon: Icon, title, description, onClick }) => {
  return (
    <div 
      className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-brand-orange/20 transition-all duration-300 cursor-pointer flex flex-col items-start gap-4 h-full"
      onClick={onClick}
    >
      <div className="p-2 bg-brand-light rounded-lg text-brand-orange">
        {Icon && <Icon size={24} />}
      </div>
      <div>
        <h3 className="text-lg font-bold text-brand-dark mb-1">{title}</h3>
        <p className="text-sm text-brand-gray leading-relaxed">{description}</p>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;

