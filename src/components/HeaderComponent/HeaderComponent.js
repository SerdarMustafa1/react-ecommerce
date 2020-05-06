import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../CartIcon/CartIcon.Component';
import CartDropdown from '../CartDropdown/CartDropdownComponent';

import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';

import { ReactComponent as Logo } from 'assets/Shopping_bags.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './HeaderStyles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionContainer className="options">
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
