import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h3>Eshop</h3>
                        </td>
                        <td style={{paddingLeft: "50px"}}>
                            <Link to="/">Products</Link>
                        </td>
                        <td style={{paddingLeft: "50px"}}>
                            <Link to="/cart">View Cart</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
        )    
    }
}

export default App;