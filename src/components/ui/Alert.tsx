import React from 'react';
import { AlertCircle, CheckCircle, InfoIcon, AlertTriangle } from 'lucide-react';
import clsx from 'clsx';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ type = 'info', title, message, className, ...props }, ref) => {
    const icons = {
      info: <InfoIcon className="w-5 h-5" />,
      success: <CheckCircle className="w-5 h-5" />,
      warning: <AlertTriangle className="w-5 h-5" />,
      error: <AlertCircle className="w-5 h-5" />,
    };

    const colors = {
      info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
      success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
      warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200',
      error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200',
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'flex items-start gap-3 p-4 rounded-lg border-2',
          colors[type],
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0">{icons[type]}</div>
        <div className="flex-1">
          {title && <h3 className="font-semibold mb-1">{title}</h3>}
          <p className="text-sm">{message}</p>
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
export default Alert;
