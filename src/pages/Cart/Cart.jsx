import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart/EmptyCart';
import Footer from '../../components/common/Footer';
import Logo from '../../components/common/Logo/Logo';
import Menu from '../../components/common/Menu/Menu';
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import classes from './Cart.module.css';

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <div className={classes['cart-header']}>
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className={classes['orders']}>
          <h1 className={classes['orders-heading']}>Your Orders</h1>
          <div className={classes['orders-menu']}>
            <Menu list={cartList} />
          </div>
          <h3 className={classes['orders-total']}>Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
