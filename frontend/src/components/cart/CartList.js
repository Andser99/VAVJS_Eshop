import React from 'react';
import CartProduct from './CartProduct';
import CartState from './CartTracker';

function CartList() {
  let products = CartState.getItems();
  console.log("CartList received this:");
  console.log(products);
  if (products === undefined) {
    return <div> No products in cart. </div>
  }
  const listOfProducts = products.map(_ => <CartProduct product={_}/>);
  return <div>{listOfProducts}</div>;
}

export default CartList