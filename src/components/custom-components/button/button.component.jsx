/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => (
  <button {...otherProps} type="button">
    {children}
  </button>
);

export default Button;
