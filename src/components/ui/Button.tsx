import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2',
          variant === 'primary' && 'bg-primary text-white hover:bg-opacity-90 active:scale-95',
          variant === 'secondary' && 'bg-secondary text-black hover:bg-opacity-90 active:scale-95',
          variant === 'outline' && 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
          variant === 'ghost' && 'text-primary hover:bg-primary hover:bg-opacity-10',
          size === 'sm' && 'px-3 py-2 text-sm',
          size === 'md' && 'px-4 py-2.5 text-base',
          size === 'lg' && 'px-6 py-3 text-lg',
          isLoading && 'opacity-60 cursor-not-allowed',
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
