import type { FC } from 'react';
import type React from 'react';
import type { ButtonProps } from 'rsuite';

export type TPreset = 'default' | 'primary' | 'secondary' | 'ghost';

type TSize = 'lg' | 'md' | 'sm'; // default md

type TAdditional = {
  icon?: React.ReactNode;
  preset: TPreset;
  size?: TSize;
};

type TOmitedButtonProps = Omit<ButtonProps, 'appearance' | 'size'>;

export type ButtonType = FC<TOmitedButtonProps & TAdditional>;
