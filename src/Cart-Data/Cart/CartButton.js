import React from 'react';
import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../Store/ui-slice';
const CartButton = (props) => {
  const cartQuantity = useSelector((state)=> state.cart.totalQuantity)
  const dispatch = useDispatch();
  
  const toggleHandle =()=>{
  dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;