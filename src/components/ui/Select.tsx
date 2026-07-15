import React from 'react';
import clsx from 'clsx';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={clsx(
          'w-full px-4 py-2.5 rounded-lg border-2 border-gray-300 dark:border-slate-600',
          'bg-white dark:bg-slate-800 text-gray-900 dark:text-white',
          'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20',
          'transition-all duration-200',
          error && 'border-red-500',
          className
        )}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
);

Select.displayName = 'Select';
export default Select;
