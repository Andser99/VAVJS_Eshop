import React, { Component } from "react";
import ProductList from "./ProductList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {productsList: []}
    }
    async componentDidMount() {
        var f = await fetch('http://localhost:3001/products');
        var response = await f.json();
        console.log("Response: ");
        console.log(response);
        this.setState({ productsList: response });
        console.log("State productslist: ");
        console.log(this.state.productsList);
    }
    render() {
        return (
        <React.Fragment>
            <h3>Product Page</h3>
            <ProductList products={this.state.productsList}></ProductList>
        </React.Fragment>
        )    
    }
}

export default App;