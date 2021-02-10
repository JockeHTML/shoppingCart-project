import React, {useState} from 'react';
import styles from "./Products.module.css";
import  { Card, Grid} from "@material-ui/core";
import ShoeInfo from "../ShoeInfo/ShoeInfo";

function Products({productsData, submitAdd}) {

    const [ shoe, setShoe ] = useState([]);
    const [ handleClick, setHandleClick ] = useState(false);

    /* show shoes and render shoe info incase its clicked */
    return (
        handleClick ? <ShoeInfo setHandleClick={setHandleClick} submitAdd={submitAdd} shoe={shoe} /> :
        <div className={styles.wrapper}>
        <Grid container item lg={8} justify="center" spacing={4}>
            {productsData.map((product) => {
            return (
            <Grid xs={6} md={4} lg={2} key={product._id} id={product._id} className={styles.grid} component={Card} item>
                <div onClick={() => setShoe(product)} className={styles.imageDiv}>
                    <img onClick={() => setHandleClick(true)} src={product.src} alt="alt"/>
                </div>
                <div className={styles.cardInfo}>
                    <h2>{product.title}</h2>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                </div>
                <div className={styles.button}>
                    <button onClick={() => submitAdd(product)}> ADD TO CART </button>
                </div>
        </Grid>
        
        )
    })}
        </Grid>
        </div>
    );
}

export default Products;
