import React from "react";
import { CustomBtnContainer } from "./custom-btn.styled";

const CustomBtn = ({ children, ...props }) => {
  return <CustomBtnContainer {...props}>{children}</CustomBtnContainer>;
};

export default CustomBtn;
