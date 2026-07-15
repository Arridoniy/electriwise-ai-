import React from 'react';
import clsx from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', className, ...props }, ref) => (
    <span
      ref={ref}
      className={clsx(
        'inline-block px-3 py-1 rounded-full text-sm font-semibold',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'secondary' && 'bg-secondary text-black',
        variant === 'success' && 'bg-green-500 text-white',
        variant === 'warning' && 'bg-yellow-500 text-white',
        variant === 'danger' && 'bg-red-500 text-white',
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = 'Badge';
export default Badge;
