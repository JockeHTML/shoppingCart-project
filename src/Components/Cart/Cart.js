import React from 'react';
import styles from "./Cart.module.css"
import  { Card, Grid} from "@material-ui/core";

function Cart({shoeAdded, clearCart}) {

    const shoes = shoeAdded;

    const total = () => {
        return shoes.reduce((sum, {price}) => sum + price, 0);
    };

    return (
        <div className={styles.wrapper}>
        {shoeAdded.length > 0 ? 
        <Grid container justify="center">
            <div>
                <button onClick={() => clearCart()}>CLEAR CART</button>
            </div>
        {shoes.map((shoe, i) => {
            return (
            <div key={i} className={styles.shoeDiv}>
                <Grid item xs={12} md={6} lg={3} component={Card} className={styles.shoe}>
                    <div className={styles.imageDiv}>
                        <img src={shoe.src} alt=""/>
                    </div>
                    <div className={styles.shoeInfo}>
                        <h1>{shoe.title}</h1>  
                    </div>  
                </Grid>
            </div>
            )})}
        </Grid> : 
        <div className={styles.emptyCartHeading}>
        <h1>Your cart is empty!</h1>  
        </div>}
        <div><p>Total:{total()}</p></div>
        </div>
    );
}

export default Cart;

 