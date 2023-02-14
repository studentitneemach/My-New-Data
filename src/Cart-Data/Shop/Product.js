import React from 'react';
import ProductItem from './ProductItem';
import classes from './Product.module.css';
import CartData  from '../CartData.json'
const Products = (props) => {
  return (
    <div>
   <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {
        CartData.map((product)=>(
          <ProductItem
          key ={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))
      }
      </ul>
   </section>
    </div>
  );
};

export default Products;