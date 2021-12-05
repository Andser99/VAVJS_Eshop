//+ 1	DB a praca s nou v ramci JS	SUM 5
//+ a	produkty	1
//+ b	objednavky	2
//+ c	zakaznici	1
//+ d	reklama a pocitadlo	1
//+ 2	rozhranie e-shopu	SUM 10
//+ a	stranka produktov	3
//+ b	stranka objednavky	3
//+ c	podakovanie (reklama s pocitadlom)	1
// d	admin rozrhanie (tabulka objednavok so stavom a moznostou zmeny stavu, zmena reklami a zobrazenie stavu pocitadla)	3
//+ 3	Docker a testing	SUM 5
//+ a	docker-compose a Dockerfiles	1
//+ b	end-to-end test objednavky (simulacia network callov a pouzite mocha)	4
//+ 4	Kosik	SUM 5
//+ a	viac produktov	2
//+ b	viac kusov	2
//+ c	viac kusov a viac produktov	1


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
import Navbar from "./components/Navbar";

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
