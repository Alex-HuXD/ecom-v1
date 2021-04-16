import React from "react";
import "./custombtn.scss";

const CustomBtn = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <div
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-btn`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default CustomBtn;
