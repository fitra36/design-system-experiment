import React from 'react';
import { Button as RButton } from 'rsuite';

import type { ButtonType } from './index.type';

const Button: ButtonType = ({ icon: Icon, children, ...props }) => {
  return (
    <RButton {...props}>
      {Icon && <div className="rs-container-icon">{Icon}</div>}
      {children}
    </RButton>
  );
};

export default Button;
