import React from "react";
import classes from './CartItem.module.css';
import { useDispatch } from "react-redux/es/exports";
import { CartAction } from "../Store/cart-slice";
const CartItem = (props) => {
  const dispatch=  useDispatch();
  const { title, quantity, total, price , id } = props.item;
  const removeItemHandler =()=>{
    dispatch(CartAction.removeItemCart(id))
  }

  
  const addItemToHandle=()=>{
    dispatch(
      CartAction.addItemToCart({
        title, price,id
      })
    )
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
        ${total}{' '}
         {/* ${total.toFixed(2)}{' '} */}
          <span className={classes.itemprice}>
          (${price}/item)   
           {/* (${price.toFixed(2)}/item) */}
            </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemToHandle}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
// information alert
// Schedule learning time
// Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. 
//Set time aside to learn and get reminders using your learning scheduler.
// About this course
// Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
// By the numbers
// Skill level: All Levels
// Students: 658373
// Languages: English
// Captions: Yes