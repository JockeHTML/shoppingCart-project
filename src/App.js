import React, {useState} from "react";
import styles from './App.module.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Cart from "./Components/Cart/Cart"

import {
  Switch,
  Route,
} from "react-router-dom";

const products = [
  {
          "_id": "1",
          "title": "Shoe One",
          "src": "https://images.pexels.com/photos/5710082/pexels-photo-5710082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "description": "Uppdatera din look och kliv in i en ny värld med Shoe One.",
          "price": 23,
          "colors": ["white", "red", "black", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "2",
          "title": "Shoe Two",
          "src": "https://images.pexels.com/photos/5710075/pexels-photo-5710075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Shoe Two ger dig stil, en bekväm känsla och rätt attityd.",
          "price": 19,
          "colors": ["white", "red", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "3",
          "title": "Shoe Three",
          "src": "https://images.pexels.com/photos/6050913/pexels-photo-6050913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Shoe Three är den klassiska basketskon i en ny variant av det du gillar.",
          "price": 50,
          "colors": ["white", "lightblue", "white", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "4",
          "title": "Shoe Four",
          "src": "https://images.pexels.com/photos/5710081/pexels-photo-5710081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Shoe Four har en kombination av klassisk stil och enastående dämpning.",
          "price": 15,
          "colors": ["white", "orange", "black", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "5",
          "title": "Shoe Five",
          "src": "https://images.pexels.com/photos/5710077/pexels-photo-5710077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Basket i parken, grillfester på söndagarna och solsken.",
          "price": 10,
          "colors": ["white", "orange", "black", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "6",
          "title": "Shoe Six",
          "src": "https://images.pexels.com/photos/5710076/pexels-photo-5710076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Shoe Six — en klassiker redan från starten.",
          "price": 17,
          "colors": ["white", "orange", "black", "crimson", "teal"],
          "count": 1
  }
];

function App() {
  
  const [ shoeAdded, setShoeAdded ] = useState([]);
    const submitAdd = (shoe) => {
      setShoeAdded([...shoeAdded, shoe])
      alert("Your product have been added to the cart!")
    }

    const clearCart = () => {
      setShoeAdded([]);
    }

  return (
    <div className={styles.App}>
       <Nav shoesAdded={shoeAdded} />
      <Switch>
          <Route path="/home"> 
            <Home/>
          </Route>
          <Route path="/products"> 
            <Products submitAdd={submitAdd} products={products}/>
          </Route>
          <Route path="/contact"> 
            <Contact/>
          </Route>
          <Route path="/about"> 
            <About/>
          </Route>
          <Route path="/cart">
            <Cart shoeAdded={shoeAdded} clearCart={clearCart} />
          </Route>
          <Route path="/"> 
            <Home/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
