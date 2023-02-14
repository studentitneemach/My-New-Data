import { useDispatch } from 'react-redux';
import { CartAction } from '../Store/cart-slice';
import React from 'react';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

// const ProductItem = (props) => {
//  const dispatch= useDispatch();
//   const { title, price, description,id } = props;

//   const addTOCartHandle=()=>{
//     dispatch(CartAction.addItemToCart({
//       id,
//       title,
//       price,
//     } ))
//   }
//   return (
//     <li className={classes.item}>
//       <Card>
//         <header>
//           <h3>{title}</h3>
//           <div className={classes.price}>${price} 
//           {/* {price.toFixed(2)} */}
//           </div>
//         </header>
//         <p>{description}</p>
//         <div className={classes.actions}>
//           <button style={{backgroundColor:"rgb(59, 115, 119)"}} onClick={addTOCartHandle}>Add to Cart</button>
//         </div>
//       </Card>
//     </li>
//   );
// };

// export default ProductItem;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ProductItem = (props) => {
  const dispatch= useDispatch();
   const { title, price, description,id } = props;
 
   const addTOCartHandle=()=>{
     dispatch(CartAction.addItemToCart({
       id,
       title,
       price,
     } ))
   }
   return (
     <li className={classes.item}>
       <Card>
         <header>
           <h3>{title}</h3>
           <div className={classes.price}>${price} 
           {/* {price.toFixed(2)} */}
           </div>
         </header>
         <p>{description}</p>
         <div className={classes.actions}>
           <button style={{backgroundColor:"rgb(59, 115, 119)"}} onClick={addTOCartHandle}>Add to Cart</button>
         </div>
       </Card>
     </li>
   );
 };
 
 export default ProductItem;