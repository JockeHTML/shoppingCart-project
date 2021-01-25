import React, {useState} from "react";
import styles from './App.module.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Cart from "./Components/Cart/Cart"
import {productsData} from "./Components/Context/Context";

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  const [ shoeAdded, setShoeAdded ] = useState([]);
    const submitAdd = (shoe) => {
      setShoeAdded([...shoeAdded, shoe])
      alert("Your product have been added to the cart!")
    }

    const clearCart = () => {
      setShoeAdded([]);
    }

    const deleteShoe = (shoeToBeDeleted) => {
      const remainingShoes = shoeAdded.filter((shoesInCart, index) => {
        return shoesInCart._id !== shoeToBeDeleted._id 
      });
      setShoeAdded(remainingShoes);
    }

  return (
    <div className={styles.App}>
       <Nav shoesAdded={shoeAdded} />
      <Switch>
          <Route path="/home"> 
            <Home/>
          </Route>
          <Route path="/products"> 
            <Products submitAdd={submitAdd} productsData={productsData}/>
          </Route>
          <Route path="/contact"> 
            <Contact/>
          </Route>
          <Route path="/about"> 
            <About/>
          </Route>
          <Route path="/cart">
            <Cart deleteShoe={deleteShoe} shoeAdded={shoeAdded} clearCart={clearCart} />
          </Route>
          <Route path="/"> 
            <Home/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
