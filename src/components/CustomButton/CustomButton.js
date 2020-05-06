import React from 'react';

import './CustomButtonStyles.scss';
import { CustomButtomContainer } from './CustomeButtonStyles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtomContainer {...props}>{children}</CustomButtomContainer>
);

export default CustomButton;
