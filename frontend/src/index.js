import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import CompletedOrder from "./pages/CompletedOrder";
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/completed' element={<CompletedOrder />} />
          </Routes>
      </Router>
    </div>
         
        );
}

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
