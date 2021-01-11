import React from 'react';
import styles from "./ShoeInfo.module.css";
import { Link } from "react-router-dom";
import cx from "classnames";
 
export default function ShoeInfo({shoe, setHandleClick, submitAdd}) {

    const handleBack = () => {
        setHandleClick(false);
    }

    const addToCart = () => {
        submitAdd(shoe);
    }

    return (
    <div className={styles.wrapper}>
            <div className={styles.shoeInfo}>
                <div className={styles.image}>
                    <img src={shoe.src} alt="alt"/>
                </div>
                    <div className={styles.text}>
                    <div className={styles.title}>
                        <h1>{shoe.title}</h1>
                        <h3>${shoe.price}</h3>
                    </div>
                    <div className={styles.info}>
                        <p>{shoe.description}</p>
                        <p>{shoe.content}</p>
                    </div>
                    
                    <div className={styles.colors}>
                        {shoe.colors.map((color, i) => {
                            return <button key={i} style={{background: color}} className={styles.colorsButton}></button>
                        })}             
                    </div>
                    <div className={cx(styles.button, styles.addButton)}>
                        <button onClick={addToCart}> ADD TO CART </button>
                    </div>
                    
                </div>
            </div> 
            <div className={styles.button}>
                <Link onClick={handleBack} to="/products"> PRODUCTS </Link>
            </div>
    </div>
    );
}

