import React from 'react';
import CartState from '../cart/CartTracker';

function Product({ product }) {
  return (
    <li key={product.name}>
      <table>
        <tbody>
        <tr>
          <td>
            <h2>
              {product.name}
            </h2>
            <p>{product.id}</p>
          </td>
          <td>
            <p>
              Cena: {product.cost / 100}e, Pocet: {product.count}
            </p>
          </td>
          <td>
            <img src={product.image} width="20%" alt={product.id} />
          </td>
          <td>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </td>
        </tr>
        </tbody>
      </table>
    </li>
  )
}


// Local storage testing
function addToCart(product) {
  let result = CartState.addItem(product.id, product.cost, product.image, product.count);
  console.log("Item add to cart result = " + result);
  // let cart = [];
  // console.log(`PID: ${pid}`);
  // if (localStorage.getItem("cart") === null) {
  //   cart = [{"name": pid, "count": max}];
  //   console.log("CART:");
  //   console.log(cart);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // } 
  // else 
  // {
  //   var st = localStorage.getItem("cart");
  //   console.log(st);
  //   cart = JSON.parse(st);
  //   let found = false;
  //   for (let x of cart) {
  //     if (x.name == pid) {
  //       x.count += x.count == max ? 0 : 1;
  //       found = true;
  //       break;
  //     }
  //   }
  //   if (!found) {
  //     cart.push({"name": pid, "count": 1});
  //   }
  // }
  // localStorage.setItem("cart", JSON.stringify(cart));
  // alert(`Added ID=${pid} to cart`);
}

export default Product