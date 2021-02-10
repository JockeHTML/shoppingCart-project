import React from 'react';
import styles from "./Cart.module.css"
import  {Grid} from "@material-ui/core";
import cx from "classnames";

import {
    Link
  } from "react-router-dom";

    function Cart({shoeAdded, clearCart, deleteShoe}) {

    const shoes = shoeAdded;

    /* total sum of shoes added to cart */
    const total = () => {
        return shoes.reduce((sum, {price}) => sum + price, 0);
    };

    /* render different data depending on if there is something in the cart or not */
    return (
        <div className={styles.wrapper}>
        
        {shoeAdded.length > 0 ? 
        <Grid item lg={8} className={styles.gridContainer} container>
           
        {shoes.map((shoe, i) => {
            return (
                <Grid key={i} id={shoe._id} item xs={12} md={10} lg={7} className={styles.shoe}>  
                    <div className={styles.image}>
                        <img src={shoe.src} alt=""/>
                    </div>
                    <div className={styles.shoeInfo}>
                        <span onClick={() => deleteShoe(shoe)} className={styles.removeButton}>
                            <i className="fas fa-times"></i>
                        </span>
                            <h1>{shoe.title}</h1>
                            <p>{shoe.description}</p>
                            <p>{shoe.content}</p>
                        <span className={styles.price}><h3 style={{color:"red"}}>${shoe.price}</h3></span>
                    </div>   
                </Grid>           
            )})}
        </Grid> : 
            <div className={styles.emptyCart}>
                <div className={styles.heading}>
                    <h1>Your cart is empty!</h1>
                    <Link className={cx(styles.button, styles.homeButton)} to="/">BACK TO HOME</Link>
                </div> 
            </div>}
            {shoes.length > 0 ? <div className={styles.total}>
                <button className={cx(styles.button, styles.homeButton)} onClick={() => clearCart()}>CLEAR CART</button>
                <h2>Total: ${total()}</h2>
            </div> : null} 
            
        </div>
    );
}

export default Cart;

