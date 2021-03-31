import React from 'react';

import { IconWrapper, IconPropsType } from './IconWrapper';

export const MenuIcon: React.FC<IconPropsType> = ({ ...props }) => {
  return (
    <IconWrapper {...props} viewBox='0 0 542 461'>
      <path d='M184.508 112.461V1.656h357.677v110.805H184.508M184.508 287.127V176.329h357.679v110.798H184.508M184.508 461.8V351h357.681v110.8H184.508M116.022 58.001c0 32.044-25.974 58.011-58.012 58.011C25.973 116.012 0 90.045 0 58.002 0 25.961 25.973-.005 58.01-.005c32.038 0 58.012 25.967 58.012 58.005M116.022 224.827c0 32.037-25.974 58.01-58.012 58.01-32.037 0-58.01-25.973-58.01-58.01 0-32.036 25.973-58.011 58.01-58.011 32.038 0 58.012 25.975 58.012 58.01M116.022 403.357c0 32.038-25.974 58.011-58.012 58.011-32.037 0-58.01-25.973-58.01-58.01 0-32.04 25.973-58.01 58.01-58.01 32.038 0 58.012 25.97 58.012 58.01' />
    </IconWrapper>
  );
};
