import React from 'react';
import type { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const baseStyle = 'rounded-xl px-4 py-2 font-medium shadow-md transition-all';

  const variants = {
    default: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    ghost: 'text-blue-600 hover:underline',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
