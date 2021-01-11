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
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
          "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
          "price": 23,
          "colors": ["white", "red", "black", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "2",
          "title": "Shoe Two",
          "src": "https://images.pexels.com/photos/5710075/pexels-photo-5710075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
          "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
          "price": 19,
          "colors": ["white", "red", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "3",
          "title": "Shoe Three",
          "src": "https://images.pexels.com/photos/6050913/pexels-photo-6050913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
          "price": 50,
          "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
          "colors": ["white", "lightblue", "white", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "4",
          "title": "Shoe Four",
          "src": "https://images.pexels.com/photos/5710081/pexels-photo-5710081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
          "price": 15,
          "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, aut corrupti. Dolorum libero illo eos dicta unde ex. Ex, quos!",
          "colors": ["white", "orange", "black", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "5",
          "title": "Shoe Five",
          "src": "https://images.pexels.com/photos/5710077/pexels-photo-5710077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
          "price": 10,
          "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
          "colors": ["white", "orange", "black", "crimson", "teal"],
          "count": 1
  },
  {
          "_id": "6",
          "title": "Shoe Six",
          "src": "https://images.pexels.com/photos/5710076/pexels-photo-5710076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
          "price": 17,
          "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat.",
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
            <Products submitAdd={submitAdd} products={products}/>
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
