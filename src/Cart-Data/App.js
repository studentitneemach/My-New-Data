import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import Layout from './Layout/Layout';
import Cart from './Cart/cart';
import Product from './Shop/Product';
const App =()=>{
    const ToggleCart = useSelector((state => state.ui.cartIsVisible))
  const cart =  useSelector( state => state.cart)

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])


    return(
        <Layout> 
           {ToggleCart && <Cart />}
            <Product />
        </Layout>
    )
} 
export default App;
///////////https://github.com/Tammibriggs/shopping-cart/tree/main/src
////https://github.com/basir/react-shopping-cart