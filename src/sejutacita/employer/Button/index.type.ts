import type { FC } from 'react';
import type React from 'react';
import type { ButtonProps } from 'rsuite';

type AdditionalType = {
  icon?: React.ReactNode;
};
export type ButtonType = FC<ButtonProps & AdditionalType>;
