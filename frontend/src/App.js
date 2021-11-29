import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Cart />
        <Products />
      </React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

export default App;
