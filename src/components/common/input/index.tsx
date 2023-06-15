import clsx from 'clsx';
import { ErrorMessage } from 'formik';
import React from 'react';

interface Props {
  field: any;
  form: any;

  placeholder?: string;
  className?: string;
  disable?: boolean;
  inputType?: 'text';
}

export function InputForm({
  field,
  form,

  placeholder,
  inputType = 'text',
  className,
  disable = false
}: Props) {
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className={className}>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disable}
        type={inputType}
        className={clsx('border-b-2 border-solid outline-none w-full py-2 px-3 pl-0', {
          'border-red-600': showError,
          'border-gray-300 focus:border-gray-700': !showError
        })}
      />
      {showError && (
        <div className="text-red-600 mt-1 text-sm">
          <ErrorMessage name={name} />
        </div>
      )}
    </div>
  );
}
