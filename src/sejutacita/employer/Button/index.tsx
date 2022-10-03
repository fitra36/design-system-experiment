import clsx from 'clsx';
import React from 'react';
import { Button as RButton } from 'rsuite';
import type { TypeAttributes } from 'rsuite/esm/@types/common';

import type { ButtonType, TPreset } from './index.type';

const styleGenerator: Record<
  TPreset,
  { appearance: TypeAttributes.Appearance; className?: string }
> = {
  primary: {
    appearance: 'primary',
  },
  default: {
    appearance: 'default',
  },
  ghost: {
    appearance: 'ghost',
  },
  secondary: {
    appearance: 'primary',
    className: 'rs-btn-secondary',
  },
};

const Button: ButtonType = ({
  icon: Icon,
  children,
  className,
  preset,
  ...props
}) => {
  const { appearance, className: generatedClassName } = styleGenerator[preset];

  return (
    <RButton
      appearance={appearance}
      className={clsx(generatedClassName, className)}
      {...props}
    >
      {Icon && <div className="rs-container-icon">{Icon}</div>}
      {children}
    </RButton>
  );
};

export default Button;
