import React from "react";
import CustomBtn from "../custom-button/CustomBtn";

import "./cart.scss";

const CartDropdownMenu = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomBtn>CHECKOUT</CustomBtn>
    </div>
  );
};

export default CartDropdownMenu;
