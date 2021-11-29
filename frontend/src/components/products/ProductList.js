import React from 'react';
import Product from './Product';

function ProductList({products}) {
  if (products === undefined) {
    return <div> No products found. </div>
  }
  const listOfProducts = products.map(_ => <Product product={_}/>);
  console.log("List of products: ");
  console.log(listOfProducts);
  return <ul>{listOfProducts}</ul>;
}

export default ProductList