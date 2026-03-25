import React from 'react';

const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline, ghost, danger
  size = 'md',         // sm, md, lg
  icon: Icon,          // Optional icon component
  iconPosition = 'left',// left, right
  className = '',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  ...props
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';
  
  // Variants
  const variants = {
    primary: 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:bg-orange-600 hover:-translate-y-0.5',
    secondary: 'bg-white text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50',
    outline: 'bg-transparent text-brand-orange border-2 border-brand-orange hover:bg-brand-orange/10',
    ghost: 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    danger: 'bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600 hover:-translate-y-0.5',
  };

  // Sizes
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-5 text-lg font-black rounded-2xl',
  };

  // Combine classes
  const classes = `
    ${baseStyles} 
    ${variants[variant] || variants.primary} 
    ${sizes[size] || sizes.md} 
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : Icon && iconPosition === 'left' ? (
        <Icon className={children ? 'mr-2' : ''} size={size === 'lg' ? 24 : 18} />
      ) : null}
      
      {children}
      
      {!isLoading && Icon && iconPosition === 'right' && (
        <Icon className={children ? 'ml-2' : ''} size={size === 'lg' ? 24 : 18} />
      )}
    </button>
  );
};

export default Button;
