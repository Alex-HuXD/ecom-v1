import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./header.scss";

import { Link } from "react-router-dom";
import { auth } from "../../assets/firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdownMenu from "../cart-dropdown-menu/CartDropdownMenu";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <div className="logo"></div>
      </Link>
      <div className="header-options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdownMenu />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
