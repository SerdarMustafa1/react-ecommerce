import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from 'store/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from 'assets/shoppingbag.svg';

import './CartIconStyles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
