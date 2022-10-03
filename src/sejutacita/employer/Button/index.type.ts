import type { FC } from 'react';
import type React from 'react';
import type { ButtonProps } from 'rsuite';

export type TPreset = 'default' | 'primary' | 'secondary' | 'ghost';

type TAdditional = {
  icon?: React.ReactNode;
  preset: TPreset;
};

type TOmitedButtonProps = Omit<ButtonProps, 'appearance'>;

export type ButtonType = FC<TOmitedButtonProps & TAdditional>;
