import React from 'react';
import clsx from 'clsx';

type WrapperBlock = {
  children: JSX.Element;
  showLine?: boolean;
  hint?: string;
  className?: string;
};
export const WrapperBlock = ({ children, showLine = false, hint, className }: WrapperBlock) => {
  return (
    <div className={clsx('rounded-lg border border-solid border-gray-300', className)}>
      {showLine && <div className="h-2 w-full bg-cyan-900 rounded-tl-lg rounded-tr-lg"></div>}
      <div className="px-6 pb-3 pt-3">{children}</div>
      {hint && (
        <div className="border-solid border-t border-gray-300 px-6 pb-3 pt-3 text-red-600 text-sm">
          <span className="mr-1">*</span>
          {hint}
        </div>
      )}
    </div>
  );
};
