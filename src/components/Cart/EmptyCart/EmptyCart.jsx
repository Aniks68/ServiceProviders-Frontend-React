import React from 'react';
import { useHistory } from 'react-router';
import classes from './EmptyCart.module.css';

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className={classes.emptyCart}>
      <img src='/images/emptycart.png' alt='empty-cart' />
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
