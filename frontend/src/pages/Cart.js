import React, { Component } from "react";
import CartList from "../components/cart/CartList";
import OrderForm from "../components/cart/OrderForm";

class Cart extends Component {
    render() {
        return (
        <React.Fragment>
            <h3>App header for cart</h3>
            <CartList></CartList>
            <OrderForm></OrderForm>
        </React.Fragment>
        )
    }
}

export default Cart;