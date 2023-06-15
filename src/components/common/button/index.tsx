import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
};
export function Button({ label, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(className, 'bg-cyan-900 text-white rounded-md px-2 py-2 font-medium')}
    >
      {label}
    </button>
  );
}
