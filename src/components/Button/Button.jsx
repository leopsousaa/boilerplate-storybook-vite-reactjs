import React from 'react';
import './Button.css';

import P from 'prop-types';

import clsx from 'clsx';

export const Button = ({ children, variant = 'primary' }) => {
  return (
    <button
      className={clsx('button', {
        '--primary': variant === 'primary',
        '--secondary': variant === 'secondary',
        '--outlined': variant === 'outlined',
        '--disabled': variant === 'disabled',
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.string.isRequired,
  variant: P.oneOf(['primary', 'secondary', 'outlined', 'disabled']),
};
