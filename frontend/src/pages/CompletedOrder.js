import React, { Component } from "react";
import CartList from "../components/cart/CartList";
import CartState from "../components/cart/CartTracker";
import Advertisement from "../components/completed/Advertisement";

class CompletedOrder extends Component {
    render() {
        CartState.clearItems();
        return (
        <React.Fragment>
            <h3>Dakujeme za nakup.</h3>
            <Advertisement />
            <CartList></CartList>
        </React.Fragment>
        )
    }
}

export default CompletedOrder;