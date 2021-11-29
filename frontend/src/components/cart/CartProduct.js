import React from 'react';

function CartProduct({ product }) {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>
            <h3>
              Product ID={product.name}
            </h3>
          </td>
          <td>
            <p>
              {product.count}ks, Cena: {product.cost/100}e - Celkova cena: {product.cost * product.count / 100}e
            </p>
          </td>
          <td>
            <img src={product.image} width="10%" alt={product.id}/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartProduct